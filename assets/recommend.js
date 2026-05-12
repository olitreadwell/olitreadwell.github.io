(function () {
  const TO = "oliver.treadwell@gmail.com";

  const form = document.getElementById("recommend-form");
  const emailCta = document.getElementById("email-cta");
  const emailPreview = document.getElementById("email-preview");

  function readValues() {
    const data = new FormData(form);
    return {
      yourName: (data.get("yourName") || "").trim(),
      ourContext: (data.get("ourContext") || "").trim(),
    };
  }

  function buildSubject(v) {
    return v.yourName
      ? `LinkedIn recommendation draft — from ${v.yourName}`
      : "LinkedIn recommendation draft";
  }

  function buildEmailBody(v) {
    const name = v.yourName || "[your name]";
    const contextLine = v.ourContext
      ? `Context: we worked together at ${v.ourContext}.`
      : "Context: [where we worked together — company, project, or course]";

    return [
      "Hi Oli,",
      "",
      "Here's a draft based on the prompts on your site. Edit anything you want before I post it.",
      "",
      contextLine,
      "",
      "1) A specific moment. Describe one project or moment where Oli's work made a measurable difference — what changed because he was on it?",
      "   ",
      "",
      "2) How he works with others. What's it like to be on Oli's team or in a code review with him? Communication, mentoring, handling disagreement.",
      "   ",
      "",
      "3) Strength you'd hire for. If you were building a team, what's the role you'd put Oli in first, and why?",
      "   ",
      "",
      "4) Something less obvious. What's a quality of his that doesn't show up on a resume?",
      "   ",
      "",
      "5) One-sentence recommendation. If a hiring manager asked you in one sentence whether to hire Oli, what would you say?",
      "   ",
      "",
      `— ${name}`,
    ].join("\n");
  }

  function render() {
    const v = readValues();
    const subject = buildSubject(v);
    const body = buildEmailBody(v);

    emailCta.href =
      "mailto:" +
      TO +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);
    emailPreview.textContent = body;
  }

  form.addEventListener("input", render);
  render();
})();
