# Blender 애드온

[🇺🇸 English](./blender.md) | 🇰🇷 한국어

그림의 빨간 상자가 누를 곳이고, 번호 순서대로 누르면 됩니다.

## 1. 설치

1. Blender에서 **편집(Edit) > 환경 설정(Preferences) > Add-ons**, 오른쪽 위 **▼** 를 눌러
   **Install from Disk**
2. `bzepeto_blender-<버전>.zip` 을 고릅니다 — zip 그대로, **압축을 풀지 마세요**
3. 검색 칸에 `BZepeto` 를 입력하고 애드온이 체크되어 있는지 확인합니다 **①**
4. 작은 화살표로 펼쳐서 **ArmorPaint Executable** **②** 을 ArmorPaint를 푼 폴더의 `ArmorPaint.exe` 로
   지정합니다 ([ArmorPaint 설치](KO_armorpaint.md) 참고)

![Blender 환경 설정](assets/guide/bl-prefs.png)

**Base Character FBX** 는 제페토의 `creatorBaseSet_zepeto.fbx` 위치입니다(기본
`%USERPROFILE%\BZepeto\Samples\`). BZepeto에는 들어 있지 않으니 제페토 크리에이터 자료에서 받으세요.

## 2. BZepeto 탭과 베이스 캐릭터

1. 3D 뷰포트에서 **N** 키를 누르고, 오른쪽 끝의 **BZepeto** 탭 **①** 을 누릅니다
2. **Wearables** 에서 **Load ZEPETO Base Character** **②** 를 누릅니다
3. 헤드웨어·마스크를 만든다면 대신 **Load with Face Expressions** **③** — 베이스에 제페토 얼굴 표정
   249개도 함께 들어갑니다

![베이스 캐릭터 불러오기](assets/guide/bl-load-base.png)

## 3. 리깅 (Rigging)

- **본 개수** — 내 리그를 제페토 기본 뼈대(104개)와 비교하고, 추가한 스윙 본 수를 셉니다
- **포즈** — T 포즈와 A 포즈 전환. 되돌릴 때는 저장해 둔 리그를 복원하므로 여러 번 바꿔도 어깨가
  틀어지지 않습니다
- **웨이트** — 전송, 좌우 대칭, 영향 뼈 4개로 제한
- **Bone Cleaner** — 쓰지 않는 뼈 제거

### 스윙 본 (머리카락, 치마, 리본)

1. 에디트 모드에서 체인이 따라갈 **엣지 줄을 선택**합니다(치마의 세로 줄 4개 = 체인 4개)
2. 만들기 전에 패널이 결과를 알려 줍니다: *"4 chain(s), 12 bone(s)"*
3. 체인당 뼈 수, 프리셋(헤어, 리본, 치마, 코트, 액세서리), 매달 뼈, 웨이트 반경을 고릅니다
4. **Make Swing Chains**

뼈 이름은 제페토가 읽는 형식 `<관절> physics <drag> <angle drag> <restore drag>` 로 자동으로
붙습니다. 제페토 권장은 아이템당 체인 2–5개. **Remove Physics Naming** 은 physics 부분을 다시 지웁니다.

## 4. 체형 (Body Shape)

키, 어깨 너비, 가슴, 허리, 골반, 다리 길이, 목, 머리 크기 슬라이더 8개. **Realtime** 을 켜면 드래그하는
동안 캐릭터가 바로 바뀝니다. 다리 길이는 제페토 SDK와 같은 방식으로 뼈를 움직여 발이 바닥에 붙어 있습니다.

## 5. 의상 (Wearables)

`Import Clothing (FBX)` (Top / Bottom / Full / Head Accessory 버튼) → `Align Mesh to Base Body` →
`Make Garment Rig` → `Bind Garment To Character` → `Refit Clothing To Body`.
**Auto Mask from Items** 는 아이템이 덮는 몸을 검게 칠합니다(제페토가 그 부분을 숨깁니다).

## 6. Send to ZEPETO

1. 아이템을 선택하고 **Category** **①** 를 고릅니다(예: Skirt) — 아래에 그 카테고리 한도가 나옵니다
2. **Check** **②** 를 누르면 결과 목록이 나옵니다: ✔ 통과, ⚠ 경고, ✖ 고쳐야 함
3. 실패한 항목 아래에는 고치는 버튼이 함께 나옵니다 **④** (예: **Fix Transforms**,
   **Create ZEPETO Material**, **Shrink Textures to 1 MB**)
4. 빨간 항목이 없으면 **Send to Unity** **③**

![Send to ZEPETO](assets/guide/bl-send.png)

검사 항목은 19가지입니다: 삼각형 수, 머티리얼, 텍스처 크기(512px)와 **텍스처 파일 총 1MB**, UV,
본 영향 수, 트랜스폼, 이름, 마스크, 헤어, 아이템 크기, 얼굴 표정 등.

**ZEPETO Shader** — Send 패널에서 아이템의 셰이더를 고릅니다(Auto는 Unity가 이름으로 추측).
셰이더는 아이템과 함께 Unity로 가고, ArmorPaint의 ZEPETO Mode도 이에 맞춰집니다.

| 셰이더 | 용도 |
|---|---|
| Lit | 일반 아이템 |
| Cloth | 벨벳 같은 광택 |
| Fur | 털 |
| HairAlpha | 가닥이 비치는 헤어 |
| Sparkle | 반짝이 |
| Iridescence | 진주, 홀로그램 |
| Prism | 클리어코트, 에나멜 |
| CustomEnv | 보석, 고광택 — 자기 HDRI를 반사 |
| Toon | 툰 셰이딩 |
| Detail Normal | 반복되는 미세 디테일 |

**헤어 (HairAlpha)** — 가닥이 UV V 방향이 아닐 때, 베이스 컬러에 알파가 없을 때, 카드 층 순서가
뒤섞였을 때 알려 줍니다. **Sort Hair Layers** 는 안쪽 카드를 먼저 그리도록 정렬합니다.

**CustomEnv** — **Env HDRI**(`.hdr`, 256×128이나 512×256 정도의 작은 2:1 파노라마, 1MB에 포함)를
지정하면 Unity에서 반사 큐브맵이 됩니다.

**텍스처 1MB** — 합계가 넘으면 힌트에 "base 1024 -> 512 px (약 700 KB)"처럼 줄일 맵이 나오고,
**Shrink Textures to 1 MB** 가 줄인 사본을 원본 옆에 만들어 재질에 연결합니다. 원본은 그대로 둡니다.

## 7. Review Tools (Send 아래)

1. **Pose / Body Clip Test** **①** — 아이템을 입힌 캐릭터에 제페토 미리보기 포즈 10종(다리 들기·발차기
   포함)을 체형 DEFAULT·ANIME, 데포메이션 DEFAULT·1–4 에서 차례로 적용합니다. **Quick** 은 기본 체형과
   큰 데포메이션(3·4)만 봅니다
2. 결과 **②** 에 가장 심한 포즈가 나옵니다. 큰 체형에서 구멍이 나는 아이템은 실제로 반려된 사례가 있습니다
3. 어디인지 보려면: 몸(`mask`)을 선택하고 **Weight Paint** 모드에서 `BZ_Clip` 그룹을 고르면 뚫린 살이
   빨갛게 보입니다 **①**

![살이 뚫리는 곳](assets/guide/bl-clip-red.png)

**얼굴 표정 (헤드웨어, 액세서리 마스크, 스페셜 마스크)**

- **Add Face Expressions to Base** **③** — 불러온 베이스에 표정 249개를 공식 이름·순서로 만듭니다.
  내가 받은 제페토 베이스에 표정의 변화량만 입히며, 다른 베이스면 건너뛰고 알려 줍니다
- **Transfer Face Expressions** **④** — 얼굴 아이템을 먼저 선택합니다. 각 부분이 바로 아래 얼굴을 따라
  움직입니다(얼굴에서 1cm 안은 그대로, 4cm까지 서서히 약해짐). 아이템을 움직이지 않는 표정은 빠집니다
- **◀ Rest ▶** **⑤** — 표정을 하나씩 얼굴과 아이템에 보여 줍니다
- **Expression Clip Test** **⑥** — 모든 표정과 가이드가 말하는 조합(jawOpen+mouthClose,
  jawOpen+cheekPuff, 눈썹+깜빡임)에서 얼굴이 아이템을 뚫는지 검사합니다

![Review Tools](assets/guide/bl-review.png)

같은 패널에 헤어 **Head Size Test**(앱이 쓰는 가장 작은·큰 머리), **Mark Selected as Front Hair**,
이펙트용 **Add FX Joint**, **Fit Custom Body Part**, 콘텐츠 체크리스트(제페토 콘텐츠 규정을 확인했으면
체크)가 있습니다.

## 8. ArmorPaint에서 칠하기

1. 아이템을 선택하고 **Paint in ArmorPaint** **①** — 아이템이 열린 채로 ArmorPaint가 뜹니다
2. **Auto Receive** **③** 가 켜져 있으면 칠한 텍스처가 알아서 돌아옵니다. **Pull Textures from ArmorPaint**
   **②** 는 직접 가져오기입니다
3. **Stitch Selected Edges** 는 선택한 시접 엣지(에디트 모드)에 스티치를 ArmorPaint 레이어로 그립니다.
   **Animated (pose clip)** 는 뼈대와 액션을 함께 보내 늘어나는 포즈에서 칠할 수 있게 합니다

![ArmorPaint 패널](assets/guide/bl-armorpaint.png)

ArmorPaint 쪽 사용법: [ArmorPaint](KO_armorpaint.md).

## 9. ZEPETO Playground

ZEPETO Studio의 플레이 모드 메뉴를 Blender에서 그대로 재현합니다: 애니메이션 10종, 카메라, 체형 타입,
SDK 데포메이션 13종, 스페이스 — Unity로 넘기기 전에 아이템을 확인할 수 있습니다.

> 플레이그라운드는 내 ZEPETO Studio 프로젝트에서 캡처를 한 번 해야 쓸 수 있습니다: Unity에서
> 플레이그라운드 씬을 Play 모드로 실행하고 **BZepeto > Capture Playground For Blender**를 누르세요.
