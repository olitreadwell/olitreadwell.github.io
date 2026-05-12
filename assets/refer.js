(function () {
  const SUBJECT = "Have you met Oli Treadwell? Senior Software Engineer";
  const LINKEDIN_SHARE_URL =
    "https://www.linkedin.com/sharing/share-offsite/?url=" +
    encodeURIComponent("https://olitreadwell.github.io/");

  const form = document.getElementById("refer-form");
  const emailCta = document.getElementById("email-cta");
  const emailPreview = document.getElementById("email-preview");
  const linkedinCta = document.getElementById("linkedin-cta");
  const copyBtn = document.getElementById("copy-cta");
  const blurbPreview = document.getElementById("blurb-preview");
  const toast = document.getElementById("toast");

  function readValues() {
    const data = new FormData(form);
    return {
      yourName: (data.get("yourName") || "").trim(),
      yourCompany: (data.get("yourCompany") || "").trim(),
      roleContext: (data.get("roleContext") || "").trim(),
    };
  }

  function buildEmailBody(v) {
    const name = v.yourName || "[your name]";
    const companyPhrase = v.yourCompany
      ? ` at ${v.yourCompany}`
      : "";
    const rolePhrase = v.roleContext
      ? ` for the ${v.roleContext} role`
      : "";

    return [
      "Hi [recruiter name],",
      "",
      `I wanted to flag Oli Treadwell as someone worth a conversation${companyPhrase}${rolePhrase}. He's a senior software engineer with 10+ years across media, HR tech, healthcare, and compliance — React, Next.js, TypeScript, Node.js, and Ruby on Rails.`,
      "",
      "A few highlights:",
      "- 100%+ subscription revenue growth at Condé Nast (paywall architecture across 26 brands)",
      "- 30% page-load reduction and 15% engagement lift at WorkTango (Rewards rebuild)",
      "- 90% grad rate / 75% placement as a bootcamp instructor at Flatiron, Hack Reactor, and General Assembly",
      "",
      "Site: https://olitreadwell.github.io",
      "Resume: https://github.com/olitreadwell/resume",
      "LinkedIn: https://www.linkedin.com/in/olitreadwell/",
      "",
      `— ${name}`,
    ].join("\n");
  }

  function buildBlurb(v) {
    const signoff = v.yourCompany
      ? `— shared by ${v.yourName || "[your name]"}, ${v.yourCompany}`
      : `— shared by ${v.yourName || "[your name]"}`;

    return [
      "Heads up — sharing a strong engineer in case it's useful. Oli Treadwell is a senior full-stack engineer (React, Next.js, TypeScript, Node.js, also Rails) with a decade across media, HR tech, healthcare, and compliance.",
      "Site: https://olitreadwell.github.io · Resume: https://github.com/olitreadwell/resume · LinkedIn: https://www.linkedin.com/in/olitreadwell/",
      signoff,
    ].join("\n");
  }

  function render() {
    const v = readValues();
    const body = buildEmailBody(v);
    const blurb = buildBlurb(v);

    emailCta.href =
      "mailto:?subject=" +
      encodeURIComponent(SUBJECT) +
      "&body=" +
      encodeURIComponent(body);
    emailPreview.textContent = body;
    blurbPreview.textContent = blurb;
    linkedinCta.href = LINKEDIN_SHARE_URL;
  }

  let toastTimer;
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 2000);
  }

  copyBtn.addEventListener("click", async () => {
    const text = blurbPreview.textContent;
    try {
      if (!navigator.clipboard) throw new Error("no-clipboard-api");
      await navigator.clipboard.writeText(text);
      showToast("Copied to clipboard");
    } catch {
      showToast("Copy failed — select the preview text and copy manually");
    }
  });

  form.addEventListener("input", render);
  render();
})();
