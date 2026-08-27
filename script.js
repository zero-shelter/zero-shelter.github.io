const translations = {
  en: {
    skip: 'Skip to content', menu: 'Menu', navMethod: 'HOW IT WORKS', navUse: 'USE', navScope: 'Scope', navContribute: 'CONTRIBUTE', navAbout: 'ABOUT',
    homeLabel: 'zero-shelter home', primaryNavigation: 'Primary navigation', footerNavigation: 'Footer navigation', languageSelector: 'Language selector', productProperties: 'Product properties', methodList: 'zero-shelter method',
    description: 'zero-shelter reconciles dependency security findings into a short, deterministic list of what to fix now.',
    heroOverline: 'Open-source dependency security judgement', heroTitle: 'Dependency findings,<br><em>made actionable.</em>', heroSummary: 'zero-shelter leaves only the dependency fixes that need attention now.',
    copy: 'Copy', factLocal: 'Run locally', factDeterministic: 'Same input, same result', factTelemetry: 'No data collection', exampleCaption: 'Illustrative terminal output', terminalLabel: 'fix these now', critical: 'critical', high: 'high', clears: 'clears 2', reported: 'reported', toFix: 'to fix', lessNoise: '62% less noise', scoreEvidence: 'Score evidence: <code>--explain</code>',
    statementLead: 'Scanners find things.', statementTitle: 'zero-shelter makes each result<br>ready for a <em>decision.</em>', statementNote: '', homeExplore: 'Make the next action clear.', homeExploreText: 'It removes overlap and leaves one next step.', homeMethodLink: 'See how it works <span aria-hidden="true">→</span>', flowCollect: 'Read the findings', flowCollectText: 'Read npm audit and optional OSV results.', flowReconcile: 'Remove the overlap', flowReconcileText: 'Group the same advisory once.', flowAct: 'Keep the next fix', flowActText: 'Keep one short, explainable list.', startOverline: 'Get started', startTitle: 'Browse the project.', startLead: 'Source, issues, and releases are public.', startGithub: 'GitHub', startGithubText: 'Source, issues, and contribution.', startNpm: 'npm', startNpmText: 'Package details and releases.',
    methodOverline: 'How it works', methodTitle: 'From finding<br>to next action.', methodPageLead: 'One inspectable path from raw findings to the next command.', stepOneTitle: 'Collect', stepOneText: 'Read npm audit and optional OSV results.', stepTwoTitle: 'Reconcile', stepTwoText: 'Group the same advisory once.', stepThreeTitle: 'Judge', stepThreeText: 'Rank with rules you can inspect.', stepFourTitle: 'Act', stepFourText: 'Send the next action to your tools.', methodAction: 'Read the method in the README <span aria-hidden="true">↗</span>',
    evidenceOverline: 'A decision you can inspect', evidenceTitle: 'No score without<br>its working.', evidenceText: 'zero-shelter does not invent a risk score in the presentation layer. Its outputs are views of the same judgement, so the list, the evidence, and the next command remain connected.', evidenceOneTitle: 'Evidence beside the claim', evidenceOneText: 'Use <code>--explain</code> to see why an item ranked where it did.', evidenceTwoTitle: 'A ratchet, not a backlog gate', evidenceTwoText: 'Accept existing findings once; from then on, CI fails on what is newly introduced.', evidenceThreeTitle: 'One dataset, several readers', evidenceThreeText: 'Read it in a terminal, hand it to an agent as JSON, or open one static HTML file.',
    useOverline: 'In practice', useTitle: 'One signal,<br>three workspaces.', usePageLead: 'Use the same judgement in every development workspace.', useOneTitle: 'Terminal', useOneText: 'Run one command. See the next fixes.', useTwoTitle: 'CI', useTwoText: 'Fail only on newly introduced findings.', useThreeTitle: 'Coding agent', useThreeText: 'Give the same list before dependency changes.', useAction: 'See installation and CI examples <span aria-hidden="true">↗</span>',
    scopeOverline: 'Start where overlap is real', scopeTitle: 'Dependency security<br>is the first layer.', scopeText: 'v1 starts with dependency advisories because npm audit and osv-scanner can describe the same risk differently. That overlap is where reconciliation genuinely reduces noise.', scopeFuture: 'Secrets, SAST input, and developer-intent rules are possible later layers — after each one can be measured honestly.', aboutOverline: 'Why it exists · who maintains it', aboutTitle: 'Why it exists,<br><em>who maintains it.</em>', aboutLead: 'A small open-source project for dependency security work that stays useful after the first scan.', aboutReasonLabel: 'Why zero-shelter', aboutReasonText: 'Most reports are long. The useful part is knowing what to do next.', aboutMaintainersLabel: 'Maintained in the open', aboutMaintainersText: 'Built publicly by contributors. Follow or contribute on GitHub.', contributorsLabel: 'zero-shelter contributors', aboutGithub: 'Explore zero-shelter on GitHub <span aria-hidden="true">→</span>', githubProfile: 'GitHub', closingOverline: 'Open source · Apache-2.0', closingTitle: 'Keep the evidence.<br>Lose the noise.', readDocs: 'Read the documentation <span aria-hidden="true">→</span>', footerText: 'Open-source security judgement for AI-assisted development.', siteSource: 'Site source <span aria-hidden="true">↗</span>', copied: 'Command copied'
  },
  ko: {
    skip: '본문으로 건너뛰기', menu: '메뉴', navMethod: '작동 방식', navUse: '사용하기', navScope: '범위', navContribute: '기여하기', navAbout: '소개',
    homeLabel: 'zero-shelter 홈', primaryNavigation: '주요 탐색', footerNavigation: '푸터 탐색', languageSelector: '언어 선택', productProperties: '제품 특성', methodList: 'zero-shelter 처리 방식',
    description: 'zero-shelter는 의존성 보안 결과를 정리해, 지금 고칠 항목만 보여줍니다.',
    heroOverline: '오픈소스 의존성 보안 도구', heroTitle: '의존성 취약점,<br><em>고칠 것만 남깁니다.</em>', heroSummary: '여러 스캐너 결과를 정리해, 지금 고칠 항목만 보여줍니다.',
    copy: '복사', factLocal: '로컬에서 실행', factDeterministic: '같은 입력, 같은 결과', factTelemetry: '데이터 수집 없음', exampleCaption: '예시 터미널 출력', terminalLabel: '지금 고칠 항목', critical: '치명적', high: '높음', clears: '2건 해결', reported: '탐지됨', toFix: '조치 대상', lessNoise: '불필요한 결과 62% 감소', scoreEvidence: '점수 산정 근거: <code>--explain</code>',
    statementLead: '스캐너는 문제를 찾습니다.', statementTitle: 'zero-shelter는 결과를<br><em>바로 처리할 일</em>로 만듭니다.', statementNote: '', homeExplore: '중복을 정리해, 할 일만 남깁니다.', homeExploreText: '같은 문제를 하나로 묶어, 바로 확인하고 처리할 목록을 만듭니다.', homeMethodLink: '작동 방식 보기 <span aria-hidden="true">→</span>', flowCollect: '결과를 읽습니다', flowCollectText: 'npm audit 결과와 필요에 따라 OSV 결과를 읽습니다.', flowReconcile: '중복을 정리합니다', flowReconcileText: '같은 보안 권고는 하나로 합칩니다.', flowAct: '할 일을 남깁니다', flowActText: '짧고 근거를 확인할 수 있는 목록으로 정리합니다.', startOverline: 'GET STARTED', startTitle: '프로젝트를 살펴보세요.', startLead: '소스 코드, 이슈, 릴리스 정보를 확인하세요.', startGithub: 'GitHub', startGithubText: '소스 코드, 이슈, 기여 방법.', startNpm: 'npm', startNpmText: '패키지 정보와 릴리스 내역.',
    methodOverline: 'HOW IT WORKS', methodTitle: '발견부터<br>다음 조치까지.', methodPageLead: '원시 결과에서 다음 명령까지, 확인 가능한 하나의 흐름입니다.', stepOneTitle: '수집', stepOneText: 'npm audit와 선택적 OSV 결과를 읽습니다.', stepTwoTitle: '정리', stepTwoText: '같은 권고를 하나로 묶습니다.', stepThreeTitle: '판단', stepThreeText: '확인 가능한 규칙으로 순위를 정합니다.', stepFourTitle: '조치', stepFourText: '다음 조치를 도구로 전달합니다.', methodAction: 'README에서 작동 방식 보기 <span aria-hidden="true">↗</span>',
    evidenceOverline: '확인할 수 있는 판단', evidenceTitle: '근거 없는<br>점수는 없습니다.', evidenceText: 'zero-shelter는 표현 단계에서 위험 점수를 만들지 않습니다. 모든 출력은 같은 판단의 다른 보기이므로 목록, 근거, 다음 명령이 연결됩니다.', evidenceOneTitle: '주장 옆의 근거', evidenceOneText: '<code>--explain</code>으로 항목이 해당 순위에 놓인 이유를 확인합니다.', evidenceTwoTitle: '백로그 차단이 아닌 래칫', evidenceTwoText: '기존 항목은 한 번 수용하고, 이후 CI는 새로 도입된 항목에만 실패합니다.', evidenceThreeTitle: '하나의 데이터, 여러 독자', evidenceThreeText: '터미널에서 읽고, JSON으로 에이전트에 전달하거나, 하나의 정적 HTML 파일을 열 수 있습니다.',
    useOverline: 'IN PRACTICE', useTitle: '하나의 신호,<br>세 가지 작업 공간.', usePageLead: '터미널, CI, 에이전트에서 같은 판단을 사용합니다.', useOneTitle: '터미널', useOneText: '명령 하나로 다음 수정 항목을 봅니다.', useTwoTitle: 'CI', useTwoText: '새 취약점이 생길 때만 CI를 실패시킵니다.', useThreeTitle: '코딩 에이전트', useThreeText: '의존성을 바꾸기 전, 에이전트에 목록을 줍니다.', useAction: '설치와 CI 예시 보기 <span aria-hidden="true">↗</span>',
    scopeOverline: '중복이 실제로 있는 곳부터', scopeTitle: '의존성 보안은<br>첫 번째 계층입니다.', scopeText: 'v1은 npm audit와 osv-scanner가 같은 위험을 다르게 설명할 수 있는 의존성 권고부터 시작합니다. 이 중복이야말로 정리가 실제 노이즈를 줄이는 지점입니다.', scopeFuture: '시크릿, SAST 입력, 개발자 의도 규칙은 각 계층을 정직하게 측정할 수 있게 된 뒤의 확장 후보입니다.', aboutOverline: '만든 이유 · 함께 유지하는 사람들', aboutTitle: '왜 만들었고,<br><em>누가 유지하나요.</em>', aboutLead: '첫 스캔 이후에도 의존성 보안 작업이 유용하게 남도록 만드는 작은 오픈소스 프로젝트입니다.', aboutReasonLabel: 'zero-shelter를 만든 이유', aboutReasonText: '보고서는 길고, 중요한 건 다음에 무엇을 할지 아는 일입니다.', aboutMaintainersLabel: '공개적으로 함께 유지합니다', aboutMaintainersText: '기여자들이 공개적으로 만들고 유지합니다. GitHub에서 참여할 수 있습니다.', contributorsLabel: 'zero-shelter 기여자', aboutGithub: 'GitHub에서 zero-shelter 살펴보기 <span aria-hidden="true">→</span>', githubProfile: 'GitHub 프로필', closingOverline: '오픈소스 · Apache-2.0', closingTitle: '근거는 남기고.<br>노이즈는 줄이세요.', readDocs: '문서 읽기 <span aria-hidden="true">→</span>', footerText: 'AI 보조 개발을 위한 오픈소스 보안 판단 도구.', siteSource: '사이트 소스 <span aria-hidden="true">↗</span>', copied: '명령을 복사했습니다'
  }
};

Object.assign(translations.en, {
  contributeTitle: 'Contribute with<br><em>clear scope.</em>',
  contributeLead: 'Choose the route that fits your change.',
  contributeRoutesTitle: 'Where would you like to help?',
  contributionRoutes: 'Contribution routes',
  contributeProductLabel: 'Product',
  contributeProductTitle: 'Product and documentation',
  contributeProductText: 'Start with an Issue, then use the contribution guide.',
  contributeProductAction: 'Read the guide <span aria-hidden="true">↗</span>',
  contributeWebsiteLabel: 'Website',
  contributeWebsiteTitle: 'This website',
  contributeWebsiteText: 'Suggest content, design, or accessibility improvements.',
  contributeWebsiteAction: 'Open a website Issue <span aria-hidden="true">↗</span>',
  contributeSecurityLabel: 'Security',
  contributeSecurityTitle: 'Private vulnerability report',
  contributeSecurityText: 'Keep undisclosed vulnerability details out of Issues and PRs.',
  contributeSecurityAction: 'Read the policy <span aria-hidden="true">↗</span>'
});

Object.assign(translations.ko, {
  contributeTitle: '명확한 범위로<br><em>기여하세요.</em>',
  contributeLead: '변경에 맞는 경로를 고르세요.',
  contributeRoutesTitle: '어디에 기여할까요?',
  contributionRoutes: '기여 경로',
  contributeProductLabel: '제품',
  contributeProductTitle: '제품과 문서',
  contributeProductText: '이슈에서 시작하고, 제품 기여 가이드를 따르세요.',
  contributeProductAction: '가이드 읽기 <span aria-hidden="true">↗</span>',
  contributeWebsiteLabel: '웹사이트',
  contributeWebsiteTitle: '이 대표 사이트',
  contributeWebsiteText: '내용, 디자인, 접근성 개선을 제안하세요.',
  contributeWebsiteAction: '웹사이트 이슈 열기 <span aria-hidden="true">↗</span>',
  contributeSecurityLabel: '보안',
  contributeSecurityTitle: '취약점은 비공개 제보',
  contributeSecurityText: '공개 전 취약점 상세는 이슈와 PR에 넣지 마세요.',
  contributeSecurityAction: '정책 읽기 <span aria-hidden="true">↗</span>'
});

Object.assign(translations.en, {
  aboutLead: 'Built to leave the next dependency change and the evidence behind it in the same place.',
  aboutReasonLabel: 'Why zero-shelter',
  aboutReasonFirst: 'Security scanners can report the same vulnerability under different names while carrying the inherited backlog alongside it. The task is not reading every alert; it is deciding which dependency to change now.',
  aboutReasonSecond: 'zero-shelter joins <span class="nowrap">npm audit</span> and optional <span class="nowrap">osv-scanner</span> results only when they share an identifier. It keeps the next action with the evidence that supports it and does not guess at uncertain matches.',
  aboutEvidenceLabel: 'What we have measured',
  aboutEvidenceText: 'Across four fixed external projects, it reduced report volume by 47–54%. That measures volume, not accuracy, and frozen captures let anyone rerun the comparison offline.',
  aboutEvidenceAction: 'Read the benchmark <span aria-hidden="true">↗</span>'
});

Object.assign(translations.ko, {
  aboutLead: '의존성 보안 보고서에서 지금 고칠 항목과 그 근거를 함께 남기기 위해 만들었습니다.',
  aboutReasonLabel: 'zero-shelter를 만든 이유',
  aboutReasonFirst: '보안 스캐너는 같은 취약점을 서로 다른 이름으로 보고하고, 기존 백로그까지 한 번에 보여줍니다. 중요한 일은 모든 경고를 읽는 것이 아니라 지금 바꿔야 할 의존성을 고르는 일입니다.',
  aboutReasonSecond: 'zero-shelter는 <span class="nowrap">npm audit</span>와 필요에 따라 실행한 <span class="nowrap">osv-scanner</span> 결과를 공유 식별자가 있을 때만 합칩니다. 다음 조치와 그 근거를 함께 남기며, 확실하지 않은 일치는 추측하지 않습니다.',
  aboutEvidenceLabel: '측정한 것과 한계',
  aboutEvidenceText: '고정한 외부 프로젝트 네 곳에서 보고량을 47~54% 줄였습니다. 이 수치는 정확도가 아니라 확인할 보고량을 측정한 결과이며, 동결한 capture로 누구나 오프라인에서 다시 확인할 수 있습니다.',
  aboutEvidenceAction: '벤치마크 보기 <span aria-hidden="true">↗</span>'
});

const feedback = document.querySelector('.copy-feedback');
const description = document.querySelector('#page-description');
let activeLanguage = window.localStorage.getItem('zero-shelter-language') || (navigator.language.startsWith('ko') ? 'ko' : 'en');

function applyLanguage(language) {
  activeLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => { element.textContent = translations[language][element.dataset.i18n]; });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => { element.innerHTML = translations[language][element.dataset.i18nHtml]; });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => { element.setAttribute('aria-label', translations[language][element.dataset.i18nAria]); });
  document.querySelectorAll('[data-language]').forEach((button) => { button.setAttribute('aria-pressed', String(button.dataset.language === language)); });
  description.setAttribute('content', translations[language].description);
  document.title = language === 'ko' ? 'zero-shelter — 다음 조치까지 명확한 의존성 보안' : 'zero-shelter — dependency security, down to the next action';
  window.localStorage.setItem('zero-shelter-language', language);
}

document.querySelectorAll('[data-language]').forEach((button) => button.addEventListener('click', () => applyLanguage(button.dataset.language)));
const menuButton = document.querySelector('.menu-button');
const siteNavigation = document.querySelector('#site-nav');

function setMenu(open) {
  if (!menuButton || !siteNavigation) return;
  menuButton.setAttribute('aria-expanded', String(open));
  siteNavigation.classList.toggle('is-open', open);
}

menuButton?.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
siteNavigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});
document.querySelectorAll('[data-copy]').forEach((button) => button.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(button.dataset.copy);
  } catch {
    const input = document.createElement('textarea');
    input.value = button.dataset.copy;
    document.body.append(input);
    input.select();
    document.execCommand('copy');
    input.remove();
  }
  feedback.textContent = translations[activeLanguage].copied;
  feedback.classList.add('visible');
  window.setTimeout(() => feedback.classList.remove('visible'), 1800);
}));

applyLanguage(activeLanguage);
