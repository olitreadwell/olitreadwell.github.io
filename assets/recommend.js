(function () {
  const TO = "oliver.treadwell@gmail.com";
  const STORAGE_KEY = "recommend-draft-v2";
  const MAILTO_LIMIT = 1900;

  const RELATIONSHIP_PHRASES = {
    peer: "worked with Oli on the same team",
    manager: "was Oli's manager",
    report: "reported to Oli",
    collaborator: "collaborated with Oli across teams",
    instructor: "was Oli's instructor",
    student: "was Oli's student",
    client: "was Oli's client",
    other: "worked with Oli",
  };

  const form = document.getElementById("recommend-form");
  const emailCta = document.getElementById("email-cta");
  const emailPreview = document.getElementById("email-preview");
  const previewEmpty = document.getElementById("preview-empty");
  const lengthWarning = document.getElementById("length-warning");
  const copyBtn = document.getElementById("copy-recommendation");
  const toast = document.getElementById("toast");

  function readValues() {
    const data = new FormData(form);
    const v = {};
    for (const [key, value] of data.entries()) {
      v[key] = (value || "").trim();
    }
    return v;
  }

  function buildScaffoldingLine(v) {
    const segments = [];

    if (v.relationship && RELATIONSHIP_PHRASES[v.relationship]) {
      segments.push(RELATIONSHIP_PHRASES[v.relationship]);
    } else {
      segments.push("worked with Oli");
    }

    if (v.ourContext) segments[segments.length - 1] += ` at ${v.ourContext}`;
    if (v.duration) segments.push(`for ${v.duration}`);

    let sentence = "I " + segments.join(" ") + ".";
    if (v.whatWeWorkedOn) {
      sentence += ` We worked on ${v.whatWeWorkedOn}.`;
    }
    return sentence;
  }

  function hasAnyScaffolding(v) {
    return Boolean(
      v.relationship || v.ourContext || v.duration || v.whatWeWorkedOn
    );
  }

  function buildBody(v) {
    const paragraphs = [];

    if (hasAnyScaffolding(v)) {
      paragraphs.push(buildScaffoldingLine(v));
    }

    const promptKeys = [
      "moment",
      "worksWithOthers",
      "strength",
      "lessObvious",
      "comparedToPeers",
      "trustHimWith",
      "oneSentence",
    ];
    for (const k of promptKeys) {
      if (v[k]) paragraphs.push(v[k]);
    }

    if (v.yourName || v.yourTitle) {
      const signoff = v.yourTitle
        ? `${v.yourName || "[your name]"}, ${v.yourTitle}`
        : v.yourName || "";
      if (signoff) paragraphs.push(signoff);
    }

    return paragraphs.join("\n\n");
  }

  function buildSubject(v) {
    return v.yourName
      ? `LinkedIn recommendation draft from ${v.yourName}`
      : "LinkedIn recommendation draft";
  }

  function buildEmail(v) {
    const recommendation = buildBody(v);
    if (!recommendation) {
      return "";
    }
    return [
      "Hi Oli,",
      "",
      "Here's a recommendation for you to post if it's useful.",
      "",
      recommendation,
    ].join("\n");
  }

  function buildMailto(subject, body) {
    return (
      "mailto:" +
      TO +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body)
    );
  }

  function showPreview(body, mailtoLength) {
    if (!body) {
      previewEmpty.hidden = false;
      emailPreview.hidden = true;
      emailPreview.textContent = "";
      lengthWarning.hidden = true;
      return;
    }
    previewEmpty.hidden = true;
    emailPreview.hidden = false;
    emailPreview.textContent = body;
    lengthWarning.hidden = mailtoLength <= MAILTO_LIMIT;
  }

  function render() {
    const v = readValues();
    const subject = buildSubject(v);
    const recommendation = buildBody(v);
    const email = buildEmail(v);
    const mailto = buildMailto(subject, email);

    emailCta.href = mailto;
    showPreview(recommendation, mailto.length);
    saveDraft(v);
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
    if (!text) {
      showToast("Nothing to copy yet. Fill in a field above.");
      return;
    }
    try {
      if (!navigator.clipboard) throw new Error("no-clipboard-api");
      await navigator.clipboard.writeText(text);
      showToast("Copied to clipboard");
    } catch {
      showToast("Copy failed. Select the preview text and copy manually.");
    }
  }

  copyBtn.addEventListener("click", () => {
    const v = readValues();
    copyText(buildBody(v));
  });

  function saveDraft(v) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(v));
    } catch {
      /* sessionStorage unavailable; ignore */
    }
  }

  function loadDraft() {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const v = JSON.parse(raw);
      for (const [key, value] of Object.entries(v)) {
        const el = form.elements.namedItem(key);
        if (el && typeof value === "string") el.value = value;
      }
    } catch {
      /* malformed draft; ignore */
    }
  }

  form.addEventListener("input", render);
  form.addEventListener("change", render);

  loadDraft();
  render();
})();
