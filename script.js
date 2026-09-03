const translations = {
  en: {
    skip: 'Skip to content', menu: 'Menu', navMethod: 'HOW IT WORKS', navUse: 'USE', navScope: 'Scope', navContribute: 'CONTRIBUTE', navAbout: 'ABOUT',
    homeLabel: 'zero-shelter home', primaryNavigation: 'Primary navigation', footerNavigation: 'Footer navigation', languageSelector: 'Language selector', productProperties: 'Product properties', methodList: 'zero-shelter method',
    description: 'zero-shelter turns dependency scanner output into a short, deterministic list of what to fix now.',
    heroOverline: 'Local-first dependency judgement', heroTitle: 'Dependency findings,<br><em>made actionable.</em>', heroSummary: 'A local, deterministic judgement of dependency findings — what to fix now, and why.',
    copy: 'Copy', factLocal: 'Run locally', factNode: 'Node 20+', factRuntime: 'No runtime dependencies', factDeterministic: 'Same input, same result', factTelemetry: 'No runtime telemetry', exampleCaption: 'Illustrative terminal output', terminalLabel: 'fix these now', critical: 'critical', high: 'high', clears: 'clears 2', reported: 'reported', toFix: 'to fix', lessNoise: 'illustrative reduction', scoreEvidence: 'Score evidence: <code>--explain</code>',
    statementLead: 'Scanners find things.', statementTitle: 'zero-shelter makes each result<br>ready for a <em>decision.</em>', statementNote: '', homeExplore: 'Make the next action clear.', homeExploreText: 'The same judgement moves from terminal to CI and an agent without a second ranking system.', homeMethodLink: 'See how it works <span aria-hidden="true">→</span>', flowCollect: 'Read the findings', flowCollectText: 'npm audit always runs; add osv-scanner for a second source.', flowReconcile: 'Remove the overlap', flowReconcileText: 'Join shared identifiers and leave uncertain matches visible.', flowAct: 'Keep the next fix', flowActText: 'Offer a command you can defend, then keep accepted work out of the next run.', startOverline: 'Get started', startTitle: 'Browse the project.', startLead: 'The preview package, source, docs, and releases are public.', startGithub: 'GitHub', startGithubText: 'Source, docs, issues, and contribution.', startNpm: 'npm', startNpmText: 'Package details and releases.',
    methodOverline: 'How it works', methodTitle: 'From finding<br>to next action.', methodPageLead: 'From the first scan to a command you can defend in CI.', stepOneTitle: 'Collect', stepOneText: 'npm audit always runs; osv-scanner adds a second source when present.', stepTwoTitle: 'Reconcile', stepTwoText: 'Join shared identifiers; never guess at uncertain matches.', stepThreeTitle: 'Judge', stepThreeText: 'Rank with inspectable integer rules and keep context beside the score.', stepFourTitle: 'Act', stepFourText: 'Offer verified upgrades or transitive constraints; the baseline keeps inherited work quiet.', methodAction: 'Read the method in the README <span aria-hidden="true">↗</span>', methodNotesOverline: 'Read the result', methodNotesTitle: 'A result you can<br><em>defend.</em>', methodNotesLead: 'The output keeps its reasoning, its boundary, and its next command close together.', methodRecordTitle: 'The ratchet keeps a record', methodRecordText: 'Review the first run, then record inherited findings with a reason, owner, and expiry. Expiring acceptances come back into view.', methodContractTitle: 'The CI contract is explicit', methodContractText: '0 is judged and clear. 1 needs action. 2 could not judge. JSON keeps its top-level shape; terminal wording can move.', methodContractCode: '0 = clear · 1 = act · 2 = cannot judge', methodRemediationTitle: 'The command earns its place', methodRemediationText: 'Direct upgrades reach every installed copy. Transitive fixes use overrides, commands follow the detected package manager, and unverified clears counts stay out.', methodNotesAction: 'Read the stability contract <span aria-hidden="true">↗</span>',
    evidenceOverline: 'A decision you can inspect', evidenceTitle: 'No score without<br>its working.', evidenceText: 'zero-shelter does not invent a risk score in the presentation layer. Its outputs are views of the same judgement, so the list, the evidence, and the next command remain connected.', evidenceOneTitle: 'Evidence beside the claim', evidenceOneText: 'Use <code>--explain</code> to see why an item ranked where it did.', evidenceTwoTitle: 'A ratchet, not a backlog gate', evidenceTwoText: 'Accept existing findings once; from then on, CI fails on what is newly introduced.', evidenceThreeTitle: 'One dataset, several readers', evidenceThreeText: 'Read it in a terminal, hand it to an agent as JSON, or open one static HTML file.',
    useOverline: 'In practice', useTitle: 'One signal,<br>three workspaces.', usePageLead: 'Carry the same judgement from a first local scan into CI and your coding agent.', useOneTitle: 'Terminal', useOneText: 'Run the first scan with Node 20+ and a readable lockfile.', useTwoTitle: 'CI', useTwoText: 'Record the inherited backlog, upload SARIF, and fail on new findings.', useThreeTitle: 'Coding agent', useThreeText: 'Give an agent the same findings and safe remediation context before it edits dependencies.', useAction: 'Open installation and CI docs <span aria-hidden="true">↗</span>', useGuideOverline: 'Start with one run', useGuideTitle: 'From first scan<br>to quieter CI.', useGuideLead: 'Review the initial backlog. Record it only when it is understood; later runs focus on what changed.', useInspectTitle: 'Inspect', useInspectText: 'A readable lockfile is required. Add osv-scanner for a second source; no scanner report is exit 2, not a clean pass.', useRecordTitle: 'Record', useRecordText: 'Store inherited findings once; an expiry or new finding keeps the work visible.', useGateTitle: 'Gate', useGateText: 'Write SARIF for GitHub Code Scanning and use the judgement result to fail on new findings.', useAgentOverline: 'Agent route', useAgentTitle: 'Context, not control.', useAgentText: 'The hook adds the current judgement and commands to the session. It never blocks or rewrites a prompt, stays quiet on errors, and can be exercised with saved input.', usePluginTitle: 'Claude Code plugin', usePluginText: 'Install five presentation-only skills for setup, explanation, fixes, baseline, and CI.', useAgentAction: 'Read the hook contract <span aria-hidden="true">↗</span>', useOutputOverline: 'One result, many readers', useOutputText: 'Text is for people, JSON for tools, SARIF for GitHub, and HTML for a shareable local report. Use <code>--explain</code> for the score and <code>--record</code>, then <code>zero-shelter history</code>, to see changes over time.', useOutputAction: 'See all options <span aria-hidden="true">↗</span>',
    scopeOverline: 'Start where overlap is real', scopeTitle: 'Dependency security<br>is the first layer.', scopeText: 'v1 starts with dependency advisories because npm audit and osv-scanner can describe the same risk differently. That overlap is where reconciliation genuinely reduces noise.', scopeFuture: 'Secrets, SAST input, and developer-intent rules are possible later layers — after each one can be measured honestly.', aboutOverline: 'Why it exists · who maintains it', aboutTitle: 'Why it exists,<br><em>who maintains it.</em>', aboutLead: 'A preview tool whose decision stays close to its evidence, from local scan to CI and agent context.', aboutReasonLabel: 'Why zero-shelter', aboutReasonText: 'Most reports are long. The useful part is knowing what to do next.', aboutMaintainersLabel: 'Maintained in the open', aboutMaintainersText: 'Built publicly by contributors. Follow or contribute on GitHub.', contributorsLabel: 'zero-shelter contributors', aboutGithub: 'Explore zero-shelter on GitHub <span aria-hidden="true">→</span>', githubProfile: 'GitHub', closingOverline: 'Open source · Apache-2.0', closingTitle: 'Keep the evidence.<br>Lose the noise.', readDocs: 'Read the documentation <span aria-hidden="true">→</span>', footerText: 'Open-source security judgement for AI-assisted development.', siteSource: 'Site source <span aria-hidden="true">↗</span>', copied: 'Command copied'
  },
  ko: {
    skip: '본문으로 건너뛰기', menu: '메뉴', navMethod: '작동 방식', navUse: '사용하기', navScope: '범위', navContribute: '기여하기', navAbout: '소개',
    homeLabel: 'zero-shelter 홈', primaryNavigation: '주요 탐색', footerNavigation: '푸터 탐색', languageSelector: '언어 선택', productProperties: '제품 특성', methodList: 'zero-shelter 처리 방식',
    description: 'zero-shelter는 의존성 스캐너 결과를 정리해, 지금 고칠 것과 그 근거를 보여줍니다.',
    heroOverline: '로컬 우선 의존성 보안 판단', heroTitle: '의존성 취약점,<br><em>고칠 것만 남깁니다.</em>', heroSummary: '의존성 결과를 로컬에서 판단해, 지금 고칠 것과 그 이유를 보여줍니다.',
    copy: '복사', factLocal: '로컬에서 실행', factNode: 'Node 20 이상', factRuntime: '실행 의존성 없음', factDeterministic: '같은 입력, 같은 결과', factTelemetry: '실행 중 텔레메트리 없음', exampleCaption: '예시 터미널 출력', terminalLabel: '지금 고칠 항목', critical: '치명적', high: '높음', clears: '2건 해결', reported: '탐지됨', toFix: '조치 대상', lessNoise: '예시 감소량', scoreEvidence: '점수 산정 근거: <code>--explain</code>',
    statementLead: '스캐너는 문제를 찾습니다.', statementTitle: 'zero-shelter는 결과를<br><em>바로 처리할 일</em>로 만듭니다.', statementNote: '', homeExplore: '다음 조치를 명확하게 만듭니다.', homeExploreText: '같은 판단을 터미널, CI, 에이전트에서 이어가며 순위를 다시 만들지 않습니다.', homeMethodLink: '작동 방식 보기 <span aria-hidden="true">→</span>', flowCollect: '결과를 읽습니다', flowCollectText: 'npm audit은 항상 실행하고, osv-scanner를 더해 두 번째 결과를 읽습니다.', flowReconcile: '중복을 정리합니다', flowReconcileText: '공유 식별자만 연결하고, 확실하지 않은 일치는 그대로 보여줍니다.', flowAct: '할 일을 남깁니다', flowActText: '근거를 확인할 수 있는 명령만 제안하고, 수용한 항목은 다음 실행에서 제외합니다.', startOverline: 'GET STARTED', startTitle: '프로젝트를 살펴보세요.', startLead: '프리뷰 패키지, 소스 코드, 문서와 릴리스를 공개합니다.', startGithub: 'GitHub', startGithubText: '소스 코드, 문서, 이슈와 기여 방법.', startNpm: 'npm', startNpmText: '패키지 정보와 릴리스 내역.',
    methodOverline: 'HOW IT WORKS', methodTitle: '발견부터<br>다음 조치까지.', methodPageLead: '첫 스캔부터 CI에서 설명할 수 있는 명령까지 이어집니다.', stepOneTitle: '수집', stepOneText: 'npm audit은 항상 실행하고, osv-scanner가 있으면 두 번째 결과를 더합니다.', stepTwoTitle: '정리', stepTwoText: '공유 식별자만 연결하고, 확실하지 않은 일치는 추측하지 않습니다.', stepThreeTitle: '판단', stepThreeText: '확인 가능한 정수 규칙으로 순위를 정하고, 점수 옆에 맥락을 남깁니다.', stepFourTitle: '조치', stepFourText: '검증 가능한 업그레이드나 전이 의존성 제약을 제안하고, baseline은 기존 항목을 조용히 유지합니다.', methodAction: 'README에서 작동 방식 보기 <span aria-hidden="true">↗</span>', methodNotesOverline: '결과 읽기', methodNotesTitle: '설명할 수 있는<br><em>결과입니다.</em>', methodNotesLead: '결과의 근거, 한계와 다음 명령을 서로 가까운 곳에 남깁니다.', methodRecordTitle: '기록을 남기는 래칫', methodRecordText: '첫 실행 결과를 확인한 뒤 이유·담당자·만료일과 함께 기존 항목을 기록합니다. 만료된 수용 항목은 다시 보입니다.', methodContractTitle: 'CI 계약은 명확합니다', methodContractText: '0은 판정 완료·조치 없음, 1은 조치할 항목, 2는 판정 불가입니다. JSON의 최상위 형태는 유지되지만 터미널 문구는 바뀔 수 있습니다.', methodContractCode: '0 = 통과 · 1 = 조치 · 2 = 판정 불가', methodRemediationTitle: '근거 있는 명령만 제안합니다', methodRemediationText: '직접 업그레이드는 설치된 모든 복사본에 도달할 때만 제안합니다. 전이 의존성은 overrides를 사용하고, 명령은 패키지 매니저에 맞추며, 확인할 수 없는 해결 건수는 표시하지 않습니다.', methodNotesAction: '안정성 계약 보기 <span aria-hidden="true">↗</span>',
    evidenceOverline: '확인할 수 있는 판단', evidenceTitle: '근거 없는<br>점수는 없습니다.', evidenceText: 'zero-shelter는 표현 단계에서 위험 점수를 만들지 않습니다. 모든 출력은 같은 판단의 다른 보기이므로 목록, 근거, 다음 명령이 연결됩니다.', evidenceOneTitle: '주장 옆의 근거', evidenceOneText: '<code>--explain</code>으로 항목이 해당 순위에 놓인 이유를 확인합니다.', evidenceTwoTitle: '백로그 차단이 아닌 래칫', evidenceTwoText: '기존 항목은 한 번 수용하고, 이후 CI는 새로 도입된 항목에만 실패합니다.', evidenceThreeTitle: '하나의 데이터, 여러 독자', evidenceThreeText: '터미널에서 읽고, JSON으로 에이전트에 전달하거나, 하나의 정적 HTML 파일을 열 수 있습니다.',
    useOverline: 'IN PRACTICE', useTitle: '하나의 신호,<br>세 가지 작업 공간.', usePageLead: '첫 로컬 스캔부터 CI와 코딩 에이전트까지 같은 판단을 전달합니다.', useOneTitle: '터미널', useOneText: 'Node 20 이상과 읽을 수 있는 lockfile로 첫 스캔을 실행합니다.', useTwoTitle: 'CI', useTwoText: '기존 백로그를 기록하고 SARIF를 올린 뒤 새 항목에서만 실패시킵니다.', useThreeTitle: '코딩 에이전트', useThreeText: '의존성을 바꾸기 전에 같은 결과와 안전한 조치 정보를 에이전트에 전달합니다.', useAction: '설치와 CI 문서 보기 <span aria-hidden="true">↗</span>', useGuideOverline: '한 번 실행해 시작합니다', useGuideTitle: '첫 스캔부터<br>조용한 CI까지.', useGuideLead: '처음 나온 백로그를 확인하세요. 이해한 항목만 기록하면 이후 실행은 바뀐 내용에 집중합니다.', useInspectTitle: '확인', useInspectText: '읽을 수 있는 lockfile이 필요합니다. osv-scanner를 더하면 두 번째 결과를 맞출 수 있습니다. 스캔 결과가 없으면 통과가 아니라 exit 2입니다.', useRecordTitle: '기록', useRecordText: '기존 항목을 한 번 기록합니다. 만료일이나 새 항목이 있으면 다시 보입니다.', useGateTitle: 'CI 연결', useGateText: 'GitHub Code Scanning용 SARIF를 만들고, 새 항목이 생기면 판정 결과로 작업을 실패시킵니다.', useAgentOverline: '에이전트 경로', useAgentTitle: '통제가 아니라<br>맥락입니다.', useAgentText: 'hook은 현재 판단과 명령을 세션에 더합니다. 프롬프트를 막거나 바꾸지 않고 오류가 나면 조용히 끝나며, 저장된 입력으로 오프라인 실행도 확인할 수 있습니다.', usePluginTitle: 'Claude Code 플러그인', usePluginText: '설정, 설명, 수정, baseline, CI를 위한 표현 전용 skill 다섯 개를 설치할 수 있습니다.', useAgentAction: 'hook 계약 보기 <span aria-hidden="true">↗</span>', useOutputOverline: '하나의 결과, 여러 독자', useOutputText: '사람은 text, 도구는 JSON, GitHub는 SARIF, 공유할 로컬 리포트는 HTML을 사용합니다. 점수의 근거가 필요하면 <code>--explain</code>을, 시간에 따른 변화를 보려면 <code>--record</code> 후 <code>zero-shelter history</code>를 사용하세요.', useOutputAction: '전체 옵션 보기 <span aria-hidden="true">↗</span>',
    scopeOverline: '중복이 실제로 있는 곳부터', scopeTitle: '의존성 보안은<br>첫 번째 계층입니다.', scopeText: 'v1은 npm audit와 osv-scanner가 같은 위험을 다르게 설명할 수 있는 의존성 권고부터 시작합니다. 이 중복이야말로 정리가 실제 노이즈를 줄이는 지점입니다.', scopeFuture: '시크릿, SAST 입력, 개발자 의도 규칙은 각 계층을 정직하게 측정할 수 있게 된 뒤의 확장 후보입니다.', aboutOverline: '만든 이유 · 함께 유지하는 사람들', aboutTitle: '왜 만들었고,<br><em>누가 유지하나요.</em>', aboutLead: '로컬 스캔부터 CI와 에이전트 맥락까지, 근거 가까이에서 판단하는 프리뷰 도구입니다.', aboutReasonLabel: 'zero-shelter를 만든 이유', aboutReasonText: '보고서는 길고, 중요한 건 다음에 무엇을 할지 아는 일입니다.', aboutMaintainersLabel: '공개적으로 함께 유지합니다', aboutMaintainersText: '기여자들이 공개적으로 만들고 유지합니다. GitHub에서 참여할 수 있습니다.', contributorsLabel: 'zero-shelter 기여자', aboutGithub: 'GitHub에서 zero-shelter 살펴보기 <span aria-hidden="true">→</span>', githubProfile: 'GitHub 프로필', closingOverline: '오픈소스 · Apache-2.0', closingTitle: '근거는 남기고.<br>노이즈는 줄이세요.', readDocs: '문서 읽기 <span aria-hidden="true">→</span>', footerText: 'AI 보조 개발을 위한 오픈소스 보안 판단 도구.', siteSource: '사이트 소스 <span aria-hidden="true">↗</span>', copied: '명령을 복사했습니다'
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
  aboutLead: 'A preview tool whose decision stays close to its evidence, from local scan to CI and agent context.',
  aboutReasonLabel: 'Why zero-shelter',
  aboutReasonFirst: 'Security scanners can report the same vulnerability under different names while carrying the inherited backlog alongside it. The task is not reading every alert; it is deciding which dependency to change now.',
  aboutReasonSecond: 'zero-shelter joins <span class="nowrap">npm audit</span> and <span class="nowrap">osv-scanner</span> results only when they share an identifier. It keeps the next action with the evidence that supports it and does not guess at uncertain matches.',
  aboutEvidenceLabel: 'What we have measured',
  aboutEvidenceText: 'Across four fixed external projects, it reduced report volume by 47–54%. That measures volume, not accuracy, and frozen captures let anyone rerun the comparison offline.',
  aboutEvidenceAction: 'Read the benchmark <span aria-hidden="true">↗</span>',
  aboutStatusLabel: 'Current shape',
  aboutStatusText: 'Preview package. Node 20 or later. No runtime dependencies or network calls of its own; scanners retain their own behavior. The feature set can move; the CI contract stays explicit.',
  aboutStatusAction: 'Read the stability contract <span aria-hidden="true">↗</span>',
  aboutBoundaryLabel: 'v1 boundary',
  aboutBoundaryText: 'Dependency findings are in. SAST, secret scanning, and prompt-intent controls are planned, not shipped.',
  aboutBoundaryAction: 'Read the v1 scope <span aria-hidden="true">↗</span>'
});

Object.assign(translations.ko, {
  aboutLead: '로컬 스캔부터 CI와 에이전트 맥락까지, 근거 가까이에서 판단하는 프리뷰 도구입니다.',
  aboutReasonLabel: 'zero-shelter를 만든 이유',
  aboutReasonFirst: '보안 스캐너는 같은 취약점을 서로 다른 이름으로 보고하고, 기존 백로그까지 한 번에 보여줍니다. 중요한 일은 모든 경고를 읽는 것이 아니라 지금 바꿔야 할 의존성을 고르는 일입니다.',
  aboutReasonSecond: 'zero-shelter는 <span class="nowrap">npm audit</span>와 <span class="nowrap">osv-scanner</span> 결과를 공유 식별자가 있을 때만 합칩니다. 다음 조치와 그 근거를 함께 남기며, 확실하지 않은 일치는 추측하지 않습니다.',
  aboutEvidenceLabel: '측정한 것과 한계',
  aboutEvidenceText: '고정한 외부 프로젝트 네 곳에서 보고량을 47~54% 줄였습니다. 이 수치는 정확도가 아니라 확인할 보고량을 측정한 결과이며, 동결한 capture로 누구나 오프라인에서 다시 확인할 수 있습니다.',
  aboutEvidenceAction: '벤치마크 보기 <span aria-hidden="true">↗</span>',
  aboutStatusLabel: '현재 상태',
  aboutStatusText: '프리뷰 패키지입니다. Node 20 이상이며 실행 의존성이 없습니다. 자체 네트워크 호출이나 텔레메트리는 없고, 스캐너는 각자의 동작을 유지합니다. 기능은 바뀔 수 있지만 CI 계약은 명확하게 유지합니다.',
  aboutStatusAction: '안정성 계약 보기 <span aria-hidden="true">↗</span>',
  aboutBoundaryLabel: 'v1 범위',
  aboutBoundaryText: '현재는 의존성 결과를 다룹니다. SAST, 시크릿 스캔과 프롬프트 의도 분석은 아직 제공하지 않는 예정 영역입니다.',
  aboutBoundaryAction: 'v1 범위 보기 <span aria-hidden="true">↗</span>'
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
