(function () {
  const SUBJECT = "Have you met Oli Treadwell? Senior Software Engineer";
  const LINKEDIN_SHARE_URL =
    "https://www.linkedin.com/sharing/share-offsite/?url=" +
    encodeURIComponent("https://olitreadwell.github.io/");

  const form = document.getElementById("refer-form");
  const emailCta = document.getElementById("email-cta");
  const emailPreview = document.getElementById("email-preview");
  const linkedinCta = document.getElementById("linkedin-cta");
  const linkedinBlurbPreview = document.getElementById("linkedin-blurb-preview");
  const copyLinkedinBtn = document.getElementById("copy-linkedin");
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
      `I wanted to flag Oli Treadwell as someone worth a conversation${companyPhrase}${rolePhrase}. He's a senior software engineer with 10+ years across media, HR tech, healthcare, and compliance. Day to day he works in React, Next.js, TypeScript, Node.js, and Ruby on Rails.`,
      "",
      "Two examples:",
      "- 100%+ subscription revenue growth at Condé Nast, where he led the paywall architecture across 26 media brands.",
      "- 30% page-load reduction and 15% engagement lift at WorkTango, where he rebuilt the Rewards platform from Rails to React.",
      "",
      "Links:",
      "Site: https://olitreadwell.github.io",
      "Resume: https://github.com/olitreadwell/resume",
      "LinkedIn: https://www.linkedin.com/in/olitreadwell/",
      "Schedule a meeting with Oli: https://calendar.app.google/rjCZNUsxjo814vtd9",
      "",
      "Thanks,",
      name,
    ].join("\n");
  }

  function buildLinkedinBlurb(v) {
    const lines = [
      "Sharing this in case it's useful for someone in your network.",
      "",
      "Oli Treadwell is a senior software engineer with 10+ years across media, HR tech, healthcare, and compliance (React, Next.js, TypeScript, Node.js, and Ruby on Rails). He's open to senior IC roles and worth a conversation.",
      "",
      "Site: https://olitreadwell.github.io",
      "LinkedIn: https://www.linkedin.com/in/olitreadwell/",
      "Schedule a meeting: https://calendar.app.google/rjCZNUsxjo814vtd9",
    ];
    if (v.yourName) {
      lines.push("", `Shared by ${v.yourName}.`);
    }
    return lines.join("\n");
  }

  function buildBlurb(v) {
    const lines = [
      "Sharing this in case any of your teams are hiring. Oli Treadwell is a senior full-stack engineer (React, Next.js, TypeScript, Node.js, and some Rails) with a decade across media, HR tech, healthcare, and compliance.",
      "",
      "Site: https://olitreadwell.github.io",
      "Resume: https://github.com/olitreadwell/resume",
      "LinkedIn: https://www.linkedin.com/in/olitreadwell/",
      "Schedule a meeting: https://calendar.app.google/rjCZNUsxjo814vtd9",
    ];
    if (v.yourName) {
      const tag = v.yourCompany
        ? `${v.yourName}, ${v.yourCompany}`
        : v.yourName;
      lines.push("", `Shared by ${tag}.`);
    }
    return lines.join("\n");
  }

  function render() {
    const v = readValues();
    const body = buildEmailBody(v);
    const linkedinBlurb = buildLinkedinBlurb(v);
    const blurb = buildBlurb(v);

    emailCta.href =
      "mailto:?subject=" +
      encodeURIComponent(SUBJECT) +
      "&body=" +
      encodeURIComponent(body);
    emailPreview.textContent = body;
    linkedinBlurbPreview.textContent = linkedinBlurb;
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

  async function copyText(text) {
    try {
      if (!navigator.clipboard) throw new Error("no-clipboard-api");
      await navigator.clipboard.writeText(text);
      showToast("Copied to clipboard");
    } catch {
      showToast("Copy failed. Select the preview text and copy manually.");
    }
  }

  copyBtn.addEventListener("click", () => copyText(blurbPreview.textContent));
  copyLinkedinBtn.addEventListener("click", () =>
    copyText(linkedinBlurbPreview.textContent)
  );

  form.addEventListener("input", render);
  render();
})();
