window.MathJax = {
  jax: ["input/TeX", "output/CommonHTML"],
  extensions: ["tex2jax.js"],
  TeX: {
    equationNumbers: { autoNumber: "AMS" },
    extensions: ["AMSmath.js", "AMSsymbols.js", "noErrors.js", "noUndefined.js"]
  },
  /* The MathJax API provides us with the ability to register
  callbacks on signals broadcast during its startup sequence.
  Documentation:
  http://docs.mathjax.org/en/latest/advanced/signals.html
  https://docs.mathjax.org/en/v1.1-latest/startup.html */
  AuthorInit: function() {
    MathJax.Hub.Register.StartupHook("End Typeset", function() {
      const fullFontSize = 121;
      var renderMath = function() {
        /* All formulae that we want to enable responsive scaling
        for need to be wrapped with `class="mj-formula"` */
        var mjFormulae = document.getElementsByClassName("mj-formula");
        if (mjFormulae) {
          for (var i = 0; i < mjFormulae.length; ++i) {
            var mjFormula = mjFormulae[i];

            /* Retrieve the MathJax element `MathJax_CHTML`. If this element
            has a descendant `mjx-table`, the element is a multi-line equation
            with automatic numbering and its scaling factor has to be calculated
            differently. Note: if your output processor is not `CommonHTML`, I
            suspect these class names may be different */
            var mjElement = mjFormula.getElementsByClassName("MathJax_CHTML")[0];
            var mjTable = mjElement.getElementsByClassName("mjx-table")[0];

            /* If the equation is single-line, the scaling factor is a function
            of `MathJax_CHTML`'s offset width. If it's multi-line, it is a
            function of its descendant `mjx-table` */
            var scale = 0.8 * (mjTable ?
              mjFormula.offsetWidth / mjTable.offsetWidth :
              mjFormula.offsetWidth / mjElement.offsetWidth);

            /* Apply the scaling factor to the old font size, rounded to the
            nearest integer, as long as it does not exceed the max font size */
            const oldFontSize = parseInt(mjElement.style.fontSize);
            var newFontSize = Math.round(Math.min(oldFontSize * scale, fullFontSize));
            mjElement.style.fontSize = `${newFontSize}%`;
          }
        }
      }

      /* `renderMath` needs to be called once on the `End Typeset`
      signal broadcast so the scaling is applied on first load */
      renderMath();

      /* Attach an event handler that calls `renderMath` after a small delay */
      var timeoutId;
      const delay = 250;
      window.addEventListener("resize", function() {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(renderMath, delay);
      });
    });
  }
};
