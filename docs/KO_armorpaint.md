# ArmorPaint

[🇺🇸 English](./armorpaint.md) | 🇰🇷 한국어

그림의 빨간 상자가 누를 곳이고, 번호 순서대로 누르면 됩니다.

## 1. 설치

1. `BZepeto_ArmorPaint_<버전>_win64.zip` 을 **새 폴더**에 풉니다(예: `C:\Tools\BZepeto_ArmorPaint`).
   *Program Files* 아래는 피하세요 — ArmorPaint가 설정을 저장하지 못합니다. 이전 버전 폴더에 덮어쓰거나
   예전 플러그인을 복사하지 마세요
2. `ArmorPaint.exe` 를 한 번 실행해 창이 뜨는지 확인합니다. BZepeto 플러그인은 이미 켜져 있습니다
3. Blender에서 **ArmorPaint Executable** 을 이 `ArmorPaint.exe` 로 지정합니다
   ([Blender 설치](KO_blender.md) 참고)

## 2. ArmorPaint가 처음이라면 — 노드 샘플부터

ArmorPaint 폴더의 **Template** 에 BZepeto 노드 13종의 완성 재질(`.arm`)이 있습니다. 노드가 색·투명도·
높이·금속·거칠기에 제페토 용도대로 이미 연결되어 있습니다. `Template\_Overview.png` 에서 모두 볼 수 있습니다:

![노드 샘플 13종](assets/guide/ap-template-overview.png)

**샘플을 아이템에 입히기 (3단계)**

1. `Template` 폴더의 `.arm` 파일을 ArmorPaint 창에 끌어다 놓습니다 — 또는 오른쪽 아래 Materials 패널의
   **Import** **①** 를 눌러 고릅니다
2. Materials 패널에 재질이 생기면 그것을 클릭합니다 **②**

   ![샘플 불러오고 고르기](assets/guide/ap-import.png)

3. **Plugins** 탭 **①** 을 열고 **Fill Layer With It** **②** 를 누르면 레이어 전체에 입혀집니다.
   일부만 칠하려면 브러시로 칠하세요

   ![Fill Layer With It](assets/guide/ap-fill.png)

**샘플 바꾸기** — 재질을 더블클릭하면 노드가 열립니다. 대부분 *노드 → Mix RGB → Base Color* 구조라,
**Mix RGB** 노드의 두 색만 바꾸면 무늬는 그대로 두고 색만 바뀝니다. BZepeto 노드의 값도 바꿔 보세요:

| 파일 | 제페토 셰이더 | 바꿔 볼 값 |
|---|---|---|
| 01 Hair Strands | HairAlpha | Strands, Taper, Length Variation, Seed |
| 02 Hair Root to Tip | HairAlpha | Root, Tip, Grain |
| 03 Floral Lace | Lit (투명) | Motif Scale, Net Density, Thread, Motifs |
| 04 Lace Mesh | Lit (투명) | Scale, Hole |
| 05 Weave Denim | Cloth | Scale, Pattern(0 평직, 1 능직, 2 수자), Contrast |
| 06 Knit Wool | Cloth | Scale |
| 07 Quilt Puffer | Lit | Scale, Line |
| 08 Sequins | Sparkle | Scale, Density, Seed |
| 09 Gem Facets | CustomEnv | Facets, Scale |
| 10 Hammered Metal | Lit (금속) | Scale |
| 11 Edge Wear | Lit | Amount, Break Up (메쉬 모서리를 읽음 — 평평한 면에는 거의 안 보임) |
| 12 Toon Hatching | Toon | Scale, Angle, Width |
| 13 Fur Strands | Fur | Scale |

- 헤어(01, 02)는 일부러 회색입니다. 앱에서 사용자가 고른 머리색이 곱해집니다
- 레이스(03, 04)는 투명 아이템입니다. ZEPETO Mode 패널에서 **Transparent** 를 켜야 알파가 내보내집니다
- 모든 무늬는 절차적이라 제페토 규격 512px(권장 256px)로 줄여도 또렷합니다

## 3. 모델링하면서 칠하기 (라이브 링크)

1. Blender에서 아이템을 선택하고 **Paint in ArmorPaint**
2. 아이템이 열린 채로 ArmorPaint가 뜨고, Plugins 탭의 **BZepeto Live Link** 패널 **①** 이 **CONNECTED**
   로 바뀝니다(그 전에는 *WAITING FOR BLENDER*)
3. Blender의 **Auto Push** 를 켜 두면 편집을 멈춘 뒤 0.8초 후 다시 전송됩니다 — 칠한 레이어는 남습니다

![Plugins 탭](assets/guide/ap-plugins.png)

머티리얼이 없는 아이템은 보낼 때 제페토용 머티리얼이 자동으로 만들어집니다.

**Animated (pose clip)** — Blender ArmorPaint 패널에서 켜면 아이템을 뼈대·액션(예: 제페토 애니메이션
클립)과 함께 보냅니다. ArmorPaint 타임라인을 이음새가 늘어나는 포즈로 옮겨 칠하면 됩니다.

## 4. BZepeto Materials (스마트 머티리얼)

**BZepeto Materials** 패널 **②**: **Denim, Cotton, Knit, Leather, Metal, Base**. 하나를 누른 뒤
**Fill Layer With It** 으로 채우고 그 위에 칠하면 됩니다. 절차적이라 512px에서도 또렷하고 제페토 텍스처
채널에 이미 맞춰져 있습니다.

## 5. ZEPETO Mode

**ZEPETO Mode** 패널 **③** 은 아이템의 제페토 셰이더에 맞춥니다(Blender에서 지정한 셰이더를 따라가고,
**< Previous / Next >** 로 직접 바꿀 수도 있음). 내보내기가 그 셰이더가 읽는 맵으로 바뀌고, 패널에
모드별 채널 의미가 표시됩니다.

- **Setup Base Layer (neutral values)** — 모드의 중립값으로 채운 기본 레이어
- **Transparent (export base alpha)** — 베이스 컬러의 알파 유지(불투명 아이템은 더 작은 파일)
- **Emission map** — 빛나는 부분을 그 색으로 내보내기
- **Viewport preview** — Lit 뷰포트에서 모드별 제페토 느낌(헤어 하이라이트, 툰 단계 음영, 진주 광택,
  클리어코트, 반짝임). Unity 셰이더 그 자체가 아닌 근사치입니다

> **헤어:** 가닥은 **회색**으로 칠하세요 — 앱에서 사용자가 고른 머리색이 곱해집니다.
> 알파 = 가닥, Height = 하이라이트 흔들림(0.5 = 없음), Metallic = 보조 하이라이트.

## 6. BZepeto 노드

재질 노드 메뉴의 **BZepeto ZEPETO** 분류:

| 노드 | |
|---|---|
| Hair Strands / Hair Root to Tip | 알파·음영·하이라이트가 있는 가닥, 뿌리→끝 밝기 |
| Floral Lace / Lace Mesh | 샹티이 스타일 레이스(불투명도, 높이, 무늬 마스크), 단순 망사 |
| Weave / Knit / Quilt | 원단 조직 |
| Sequins / Gem Facets / Hammered Metal | 액세서리, 주얼리 |
| Edge Wear / Toon Hatching / Fur Strands | 마모, 툰 붓자국, 털 무늬 |

## 7. 스티치

1. Blender 에디트 모드에서 시접 엣지를 선택합니다
2. **Stitch Selected Edges** — 먼저 *"Will draw: N seam(s), M stitch(es)"* 가 표시됩니다
3. 스티치가 ArmorPaint에 **별도 레이어**로 생겨 색을 바꾸거나 지울 수 있습니다

| 설정 | |
|---|---|
| Dash / Gap / Width | 실 길이, 간격, 굵기 (실제 아이템 크기 기준 mm) |
| Color / Roughness | 실 색과 거칠기 |
| Target | `ArmorPaint`(레이어로 생성, 권장) 또는 `Blender`(머티리얼에 직접 그림) |

UV 섬 두 개의 경계에 있는 시접은 실제 옷처럼 **양쪽 조각 모두**에 그려집니다.

## 8. 텍스처 보내기

| ArmorPaint 버튼 | |
|---|---|
| **Send to Blender** | Blender가 알아서 받습니다(**Auto Receive**) |
| **Send to Unity** | ZEPETO Studio 프로젝트로 바로 |
| **Send to Both** | 둘 다 |
| **Size 512 / 1024 / 2048 / 4096** | 보낼 텍스처 크기 — 칠하는 해상도는 그대로 |

> 제페토는 텍스처 512px, 아이템당 1MB까지 허용하므로 기본값이 512입니다.
