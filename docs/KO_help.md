# 도움말·FAQ

[🇺🇸 English](./help.md) | 🇰🇷 한국어

## 문제 해결

| 증상 | 해결 |
|---|---|
| Blender가 애드온을 설치하지 않음 (not a valid extension / manifest 없음) | `bzepeto_blender-<버전>.zip` 파일 자체를 고르세요 — 바깥 `BZepeto_<버전>.zip` 이나 압축을 푼 폴더가 아니라 |
| ArmorPaint 패널에 `WAITING FOR BLENDER` | 아직 보낸 것이 없습니다 — Blender에서 **Paint in ArmorPaint** |
| "Set the ArmorPaint path in the add-on preferences first" | **ArmorPaint Executable** 을 지정하세요 ([Blender 설치](KO_blender.md)) |
| 텍스처가 Blender로 오지 않음 | ArmorPaint 패널이 `CONNECTED` 인지, Blender의 **Auto Receive** 가 켜져 있는지 확인 |
| ArmorPaint 창이 여러 개 | **Paint in ArmorPaint** 를 누를 때마다 하나씩 뜹니다 — 모두 닫고 한 번만 |
| 포즈 버튼이 비활성 | 리그가 이미 그 포즈입니다 |
| Send가 "No material"로 실패 | **Create ZEPETO Material** |
| Unity에 아무것도 들어오지 않음 | Console에 `[BZepeto] Hot folder watch started` 가 있는지, **2020** 패키지를 설치했는지 확인 |
| 플레이그라운드 목록이 비어 있음 | 캡처를 한 번 하세요 ([Blender](KO_blender.md) 9번) |
| BZepeto 노드가 단색으로만 칠해짐 | 이전 버전 플러그인이 복사되어 있습니다 — 새 ArmorPaint를 새 폴더에 푸세요 |
| 노드 샘플이 아무것도 안 그림 | BZepeto Nodes 플러그인이 꺼져 있습니다: **Plugins > Preferences** 에서 `bzepeto_nodes.c` 켜기 |
| CustomEnv 아이템이 회색만 반사 | Blender에서 아이템에 **Env HDRI** 를 지정하고 다시 보내세요 |
| 애니메이션 페인팅이 기본 포즈로만 보임 | 뼈대에 액션이 있어야 하고 ArmorPaint가 최신 빌드여야 합니다 |
| BZepeto Library(재질 라이브러리) 패널이 안 보임 | **Plugins > Preferences**(톱니)에서 `bzepeto_presets.c` 를 켜세요. 이전 버전 폴더 위에 덮어 썼으면 새 폴더에 풀고 경로를 다시 지정하세요 |
| 특정 포즈·큰 체형에서 살이 옷을 뚫음 | Review Tools > **Pose / Body Clip Test** 로 찾고 그 부분을 조금 키우거나 마스크로 가리세요 |
| 모자 위 머리카락이 머리색을 안 따라감 | 헤어 카테고리 아이템만 머리색을 받습니다 — 머리카락을 따로 헤어 아이템으로 |
| 파티클이 업로드 후 흰 네모 | 파티클 재질에 텍스처가 없습니다 — **BZepeto > Review > Check Selected Prefab** 이 알려 줍니다 |
| "Face expressions skipped" | 베이스 마스크가 제페토 기본 베이스와 다릅니다 — 제페토에서 받은 원본 베이스를 불러오세요 |

## 자주 묻는 질문

**상의·하의에 다른 텍스처를 쓰고 싶어요 (UDIM)** — 재질을 두 개로 나누고 하의 UV를 1002 칸(U 1–2)에
두면 됩니다. ArmorPaint에서 타일별로 칠하고, Blender·Unity가 재질마다 자기 맵을 연결합니다.
[세트 의상](KO_blender.md) 참고.

**업데이트는 어디서 받나요** — **검로드 라이브러리(Library)** 에서 받습니다. 새 버전이 나오면 검로드가
메일로 알려 줍니다. 세 도구를 같은 버전으로 모두 설치하세요([홈](KO_index.md)).

**보석을 반짝이게 (URP 전환 뒤에도)** — 커스텀 셰이더 대신 제페토 **CustomEnv** 를 쓰세요. Send 패널에서
셰이더를 CustomEnv로, **Env HDRI** 에 작은 HDRI를 지정하면 Unity 반사 큐브맵이 됩니다. 반사는 아바타·카메라가
움직일 때 바뀌므로 밝은 점(스튜디오 조명)이 몇 개 있는 HDRI가 또렷한 반짝임을 만듭니다. 제페토 BuiltIn
셰이더라 URP 전환 때 자동 변환됩니다. `09 Gem Facets` 노드 샘플로 시작해 보세요.

**강의(Blender 2.93)와 지금(4.x·5.x) 메뉴가 달라요** — Vertex Colors → **Color Attributes**(마스크 색),
Auto Smooth → **Smooth by Angle** 모디파이어(4.1부터), 애드온 설치 → **Get Extensions / Install from Disk**
(4.2부터). FBX 내보내기는 File > Export > FBX 그대로이고, BZepeto Send는 제페토 설정(스케일 0.01, 마스크
포함)으로 대신 내보냅니다.

**텍스처 1MB는 어떻게 계산하나요** — 아이템 텍스처 **PNG 파일 크기의 합**입니다(1MB = 1024KB, 해상도가 아님).
같은 512px라도 노이즈가 많거나 알파가 있으면 커집니다. BZepeto는 실제로 보낼 파일 크기로 검사하고, 넘으면
줄일 맵과 크기를 알려 줍니다.

**마스크를 칠했는데 Unity에서 몸이 안 숨어요** — 제페토는 마스크 색이 **완전한 흰색이 아닌** 정점을 숨깁니다.
마스크는 이름이 `mask`, 스킨 없이, 정점 수가 베이스와 같아야 하고(9,067), 색이 FBX에 함께 나가야 합니다.
BZepeto Send가 이렇게 내보냅니다 — 직접 내보냈다면 Send로 보내 보세요.

**`ZepetoDefaultLight` missing, 아바타가 검게 보여요** — 씬에서 제페토 기본 조명이 빠진 경우입니다. ZEPETO Studio
프로젝트의 기본 씬을 다시 열어 작업하거나, 빠진 오브젝트를 기본 씬에서 복사해 오세요.

**폴리곤 한도에 스킨(몸)도 포함되나요** — 한도는 **삼각형(Tris)** 기준이고 아이템 메쉬만 셉니다(마스크 제외).
Blender 통계의 Faces가 아니라 Triangles를 보세요. Send 검사가 카테고리 한도와 함께 보여 줍니다.

## 반려 사례 (공식 가이드·고객센터 기준)

| 사유 | BZepeto 검사 |
|---|---|
| 큰 체형·포즈에서 구멍, 살 뚫림 | Pose / Body Clip Test |
| 조명(Light) 포함 — 승인 뒤에도 삭제 | Unity Review |
| 헤드웨어·마스크 색이 머리색과 섞임 ("미완성") | `(NoColor)` 자동, Review |
| 미리보기 화면 밖으로 큰 아이템·이펙트 | Size 검사 |
| 파티클 옵션 한도 초과, 6개 이상, Collision | Unity Review |
| 마스크가 목까지 가려 움직이는 아바타 목이 잘림 | Mask borders 검사 |
| 대표성 없는·불분명한 썸네일 | 썸네일 초안 (300×300 투명) |
| 노출·무기·로고 등 콘텐츠 규정 | 콘텐츠 체크리스트 |

## 라이선스

- Blender 애드온 — GNU GPL v3 이상
- BZepeto는 검로드에서 판매하며, 한 번 구매는 한 사람의 라이선스 하나입니다
- Unity 패키지와 ArmorPaint 플러그인 — BZepeto EULA (1인 1라이선스, 만든 결과물은 사용자 소유, 도구의
  공유·재판매 금지)
- ArmorPaint 빌드 — zlib 라이선스, © ArmorPaint 개발자. 폰트 등 구성 요소는 각자의 라이선스를 따릅니다
  (다운로드에 포함된 라이선스 파일 참고)

BZepeto는 비공식 도구이며 NAVER Z(ZEPETO), Blender 재단, Unity Technologies, ArmorPaint 개발자와
관계가 없습니다.

© 2026 Chamiseul
