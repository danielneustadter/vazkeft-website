export interface Capability {
  slug: string;
  index: string;
  name: string;
  short: string;
  hero: string;
  summary: string;
  outcomes: string[];
  services: { title: string; body: string }[];
  method: { step: string; title: string; body: string }[];
  readout: { label: string; value: string }[];
}

export const capabilities: Capability[] = [
  {
    slug: 'vulnerability-research',
    index: '01',
    name: 'Vulnerability Research',
    short:
      'Original security research against real targets — reverse engineering, fuzzing, and exploit analysis that finds flaws before adversaries weaponize them.',
    hero: 'Find the flaw before it finds the mission.',
    summary:
      'Vazkeft was founded as a vulnerability research firm, and it remains the core of everything we do. We take apart software, firmware, and protocols the way a capable adversary would — then hand you the findings, the proof, and the fix, instead of the consequences.',
    outcomes: [
      'Previously unknown vulnerabilities identified and responsibly disclosed before exploitation',
      'Root-cause analysis that eliminates bug classes, not just single findings',
      'Exploitability assessments that let program offices prioritize with evidence, not fear',
    ],
    services: [
      {
        title: 'Reverse Engineering',
        body: 'Static and dynamic analysis of binaries, firmware, and embedded targets — including stripped, obfuscated, and undocumented systems.',
      },
      {
        title: 'Fuzzing & Automated Discovery',
        body: 'Custom harness development, coverage-guided fuzzing campaigns, and triage pipelines that turn crashes into actionable, deduplicated findings.',
      },
      {
        title: 'Protocol & Interface Analysis',
        body: 'Dissection of proprietary protocols, message formats, and trust boundaries to expose assumptions an adversary can violate.',
      },
      {
        title: 'Exploitability & Impact Assessment',
        body: 'Proof-of-concept development under strict rules of engagement, so stakeholders see demonstrated impact — not theoretical severity scores.',
      },
      {
        title: 'Coordinated Disclosure',
        body: 'Vendor coordination and disclosure management that protects operators while the fix ships.',
      },
    ],
    method: [
      {
        step: '01',
        title: 'Scope & threat-model',
        body: 'We map the target, its trust boundaries, and the adversary most likely to attack it, and agree on rules of engagement in writing.',
      },
      {
        step: '02',
        title: 'Instrument',
        body: 'We build the harnesses, emulation environments, and tooling needed to interrogate the target at depth.',
      },
      {
        step: '03',
        title: 'Hunt',
        body: 'Manual reverse engineering and automated discovery run in parallel; every crash and anomaly is triaged to root cause.',
      },
      {
        step: '04',
        title: 'Prove & report',
        body: 'Findings ship with reproduction steps, impact demonstration, and concrete remediation — written for both engineers and decision-makers.',
      },
    ],
    readout: [
      { label: 'DISCIPLINE', value: 'RE · FUZZING · EXPLOIT ANALYSIS' },
      { label: 'TARGETS', value: 'BINARIES · FIRMWARE · PROTOCOLS' },
      { label: 'OUTPUT', value: 'ROOT CAUSE + POC + FIX' },
    ],
  },
  {
    slug: 'offensive-security',
    index: '02',
    name: 'Offensive Security',
    short:
      'Penetration testing, adversary emulation, and managed bug-bounty operations that pressure-test systems the way real attackers will.',
    hero: 'Your adversary already scheduled the test. We just run it first.',
    summary:
      'Compliance scans tell you what a tool can find. We tell you what a motivated operator can do. Vazkeft plans and executes authorized offensive engagements — from scoped penetration tests to full adversary emulation — and runs bug-bounty programs that turn the global research community into your early-warning network.',
    outcomes: [
      'A prioritized, evidence-backed picture of how your systems actually fail under attack',
      'Attack paths chained end-to-end — not isolated findings ranked by scanner severity',
      'A hardened external surface, verified by continuous crowd-sourced testing',
    ],
    services: [
      {
        title: 'Penetration Testing',
        body: 'Scoped, authorized assessments of networks, web applications, APIs, and cloud environments, executed by researchers who write exploits — not just run tools.',
      },
      {
        title: 'Adversary Emulation',
        body: 'Threat-informed campaigns modeled on the tactics, techniques, and procedures of adversaries relevant to your sector and mission.',
      },
      {
        title: 'Bug-Bounty Program Operations',
        body: 'End-to-end management of vulnerability disclosure and bounty programs: scoping, triage, researcher relations, and remediation tracking.',
      },
      {
        title: 'Purple-Team Exercises',
        body: 'Joint offense/defense engagements that measure and tune your detection stack against live tradecraft in real time.',
      },
    ],
    method: [
      {
        step: '01',
        title: 'Authorize',
        body: 'Written rules of engagement, points of contact, and deconfliction procedures before a single packet is sent.',
      },
      {
        step: '02',
        title: 'Recon & model',
        body: 'We enumerate the attack surface and select techniques a real adversary would use against this specific target.',
      },
      {
        step: '03',
        title: 'Execute',
        body: 'Controlled exploitation with continuous communication — no surprises, no production damage, full audit trail.',
      },
      {
        step: '04',
        title: 'Debrief & re-test',
        body: 'Findings walkthrough with your engineers, remediation guidance, and verification testing once fixes land.',
      },
    ],
    readout: [
      { label: 'DISCIPLINE', value: 'PENTEST · RED TEAM · BOUNTY OPS' },
      { label: 'SURFACE', value: 'NET · WEB · API · CLOUD' },
      { label: 'OUTPUT', value: 'ATTACK PATHS + REMEDIATION' },
    ],
  },
  {
    slug: 'managed-defense',
    index: '03',
    name: 'Managed Cyber Defense',
    short:
      'A managed security practice built by attackers — detection engineering, hardening, and response informed by how intrusions actually happen.',
    hero: 'Defense designed by the people who break in.',
    summary:
      'Most managed security is alert forwarding. Ours is engineering. Because Vazkeft researchers spend their days finding and exploiting vulnerabilities, our defensive practice knows exactly which signals matter, which controls actually stop intrusions, and which products are theater.',
    outcomes: [
      'Detections tuned to real tradecraft, with the false-positive floor engineered down',
      'Hardened baselines that remove attack surface instead of documenting it',
      'A response partner who has been on the other side of the keyboard',
    ],
    services: [
      {
        title: 'Detection Engineering',
        body: 'Custom detections mapped to adversary techniques, tested against live offensive tooling before they ever page a human.',
      },
      {
        title: 'Security Monitoring',
        body: 'Managed monitoring across endpoint, network, cloud, and identity — with triage done by analysts who understand exploitation.',
      },
      {
        title: 'Hardening & Attack-Surface Reduction',
        body: 'Configuration baselines, segmentation strategy, and privilege reduction driven by findings from our offensive practice.',
      },
      {
        title: 'Incident Response',
        body: 'Scoping, containment, eradication, and recovery support when something gets through — plus the root-cause work to make sure it cannot again.',
      },
    ],
    method: [
      {
        step: '01',
        title: 'Baseline',
        body: 'We inventory what you have, how it is configured, and where the telemetry gaps are.',
      },
      {
        step: '02',
        title: 'Instrument & harden',
        body: 'Close the loudest gaps first: telemetry coverage, dangerous defaults, unnecessary trust.',
      },
      {
        step: '03',
        title: 'Detect & validate',
        body: 'Every detection is validated against offensive tooling — if we cannot trigger it, we do not trust it.',
      },
      {
        step: '04',
        title: 'Operate & improve',
        body: 'Continuous monitoring with a monthly engineering cadence, not a static SOC subscription.',
      },
    ],
    readout: [
      { label: 'DISCIPLINE', value: 'DETECT · HARDEN · RESPOND' },
      { label: 'COVERAGE', value: 'ENDPOINT · NET · CLOUD · IDENTITY' },
      { label: 'OUTPUT', value: 'VALIDATED DETECTIONS + RESPONSE' },
    ],
  },
  {
    slug: 'secure-delivery',
    index: '04',
    name: 'Secure Software Delivery',
    short:
      'CI/CD and DevSecOps engineering that ships software fast without shipping vulnerabilities — pipelines built for regulated and mission environments.',
    hero: 'Ship fast. Ship signed. Ship something you can defend.',
    summary:
      'Modern missions run on software that has to change quickly and survive contact with adversaries. Vazkeft builds the delivery infrastructure that makes both possible: hardened CI/CD pipelines, supply-chain integrity controls, and security gates that developers actually keep — designed with an attacker’s eye for where pipelines get compromised.',
    outcomes: [
      'Delivery pipelines where security checks are automated, fast, and impossible to skip silently',
      'Software supply chains with provenance — signed artifacts, SBOMs, and verified dependencies',
      'Development velocity that goes up, not down, when security is added',
    ],
    services: [
      {
        title: 'CI/CD Pipeline Engineering',
        body: 'Design and build of continuous-integration and delivery infrastructure — GitHub Actions, GitLab CI, Jenkins, and cloud-native tooling — hardened against pipeline-level attacks.',
      },
      {
        title: 'Supply-Chain Security',
        body: 'Artifact signing, SBOM generation, dependency policy, and provenance controls that make tampering detectable and expensive.',
      },
      {
        title: 'Security Automation',
        body: 'Static analysis, dependency scanning, secret detection, and dynamic testing wired into the pipeline with sensible signal-to-noise, so findings get fixed instead of ignored.',
      },
      {
        title: 'Compliance-Ready Delivery',
        body: 'Pipeline evidence and controls mapped to frameworks like NIST 800-171 and 800-53, built to support customers working toward authorization in regulated environments.',
      },
    ],
    method: [
      {
        step: '01',
        title: 'Assess',
        body: 'We review your current delivery path end to end — from commit to production — and threat-model it like a target.',
      },
      {
        step: '02',
        title: 'Design',
        body: 'A pipeline architecture with security controls placed where they catch real classes of failure, not where they create queues.',
      },
      {
        step: '03',
        title: 'Build',
        body: 'We implement alongside your team, in your repos, with infrastructure-as-code you own from day one.',
      },
      {
        step: '04',
        title: 'Transfer',
        body: 'Documentation, runbooks, and handoff so your engineers operate and extend the pipeline without us.',
      },
    ],
    readout: [
      { label: 'DISCIPLINE', value: 'CI/CD · DEVSECOPS · SUPPLY CHAIN' },
      { label: 'STACK', value: 'ACTIONS · GITLAB · IAC · CLOUD' },
      { label: 'OUTPUT', value: 'HARDENED PIPELINE + PROVENANCE' },
    ],
  },
];
