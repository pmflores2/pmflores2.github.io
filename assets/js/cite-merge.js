// Collapse numeric citations Phys. Rev. style: [1,2,3] -> [1-3], [1,2,4,5,6] -> [1,2,4-6]
// (2 consecutive numbers stay as [1,2]; 3 or more become a range.)
(function () {
  function init() {
    var cites = Array.prototype.slice.call(document.querySelectorAll("a.citation"));
    var done = new Set();

    function numbersIn(a) {
      return (a.textContent.match(/\d+/g) || []).map(Number);
    }
    function targetFor(n) {
      var li = document.querySelectorAll("ol.bibliography > li")[n - 1];
      var el = li && li.querySelector("[id]");
      return el ? "#" + el.id : null;
    }
    function isSeparator(node) {
      return node && node.nodeType === 3 && /^[\s,;]*$/.test(node.textContent);
    }

    cites.forEach(function (first) {
      if (done.has(first)) return;
      var group = [first], between = [], cur = first;
      while (true) {
        var nxt = cur.nextSibling, seps = [];
        while (nxt && isSeparator(nxt)) { seps.push(nxt); nxt = nxt.nextSibling; }
        if (nxt && nxt.nodeType === 1 && nxt.classList.contains("citation")) {
          between = between.concat(seps);
          group.push(nxt);
          cur = nxt;
        } else break;
      }
      group.forEach(function (g) { done.add(g); });

      var nums = [];
      group.forEach(function (g) { nums = nums.concat(numbersIn(g)); });
      nums = nums.filter(function (v, i, a) { return a.indexOf(v) === i; })
                 .sort(function (a, b) { return a - b; });
      if (!nums.length) return;

      function link(n) {
        var a = document.createElement("a");
        a.className = "citation";
        a.textContent = n;
        a.href = targetFor(n) || group[0].getAttribute("href") || "#";
        return a;
      }

      var wrap = document.createElement("span");
      wrap.appendChild(document.createTextNode("["));
      var i = 0, firstItem = true;
      while (i < nums.length) {
        var j = i;
        while (j + 1 < nums.length && nums[j + 1] === nums[j] + 1) j++;
        if (!firstItem) wrap.appendChild(document.createTextNode(","));
        firstItem = false;
        if (j - i >= 2) {
          wrap.appendChild(link(nums[i]));
          wrap.appendChild(document.createTextNode("\u2013"));
          wrap.appendChild(link(nums[j]));
          i = j + 1;
        } else {
          wrap.appendChild(link(nums[i]));
          i++;
        }
      }
      wrap.appendChild(document.createTextNode("]"));

      first.parentNode.replaceChild(wrap, first);
      group.slice(1).forEach(function (g) { g.remove(); });
      between.forEach(function (s) { s.remove(); });
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
