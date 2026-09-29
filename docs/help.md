# Help & FAQ

🇺🇸 English | [🇰🇷 한국어](./KO_help.md)

## Troubleshooting

| Symptom | Fix |
|---|---|
| Blender will not install the add-on (not a valid extension / no manifest) | Pick `bzepeto_blender-<version>.zip` itself — not the outer `BZepeto_<version>.zip` and not an unzipped folder |
| ArmorPaint panel says `WAITING FOR BLENDER` | Nothing has been sent yet — press **Paint in ArmorPaint** in Blender |
| "Set the ArmorPaint path in the add-on preferences first" | Set **ArmorPaint Executable** ([Blender, Install](blender.md#1-install)) |
| Textures never reach Blender | Check the ArmorPaint panel says `CONNECTED` and **Auto Receive** is on in Blender |
| Several ArmorPaint windows | Each press of **Paint in ArmorPaint** starts one — close them all and press once |
| A pose button is greyed out | The rig is already in that pose |
| Send fails with "No material" | Press **Create ZEPETO Material** |
| Nothing arrives in Unity | Check the Unity Console for `[BZepeto] Hot folder watch started` and that you installed the **2020** package |
| Playground list is empty | Make a capture once ([Blender, Playground](blender.md#9-zepeto-playground)) |
| BZepeto nodes paint a flat colour | ArmorPaint plugins from an older version were copied in — unzip the new ArmorPaint into a fresh folder |
| A node sample shows nothing | The BZepeto Nodes plugin is off: **Plugins > Preferences**, enable `bzepeto_nodes.c` |
| CustomEnv item reflects flat grey | Set **Env HDRI** on the item in Blender and send again |
| Animated painting shows the rest pose | The armature needs an action, and ArmorPaint must be the v1.2.0 build |
| Skin comes through the clothes in some poses / large body types | Review Tools > **Pose / Body Clip Test** finds which; enlarge that part a little or mask it |
| Hair on a hat does not take the hair colour | Only Hair items take it — make the hair a separate Hair item |
| Particles are white squares after upload | The particle material has no texture — **BZepeto > Review > Check Selected Prefab** reports it |
| "Face expressions skipped" | The base mask is not ZEPETO's base (vertex count / layout) — load the original base from ZEPETO |

## FAQ

**Where do I get updates?** — From your **Gumroad Library**; Gumroad emails you when a new version is
posted. Install all three tools of the same version ([Home](index.md#your-download)).

**Making gems sparkle (also after the URP switch)** — use ZEPETO's **CustomEnv** instead of a custom
shader: set the shader to CustomEnv in Blender's Send panel and a small HDRI as **Env HDRI**; it becomes
the Unity reflection cubemap. The reflection changes as the avatar and camera move, so an HDRI with a few
bright spots (studio lights) gives crisp glints. As a ZEPETO BuiltIn shader it is converted for URP
automatically. The `09 Gem Facets` node sample is a starting point.

**The course uses Blender 2.93; menus moved in 4.x / 5.x** — Vertex Colors → **Color Attributes** (mask
colours), Auto Smooth → the **Smooth by Angle** modifier (4.1+), installing add-ons → **Get Extensions /
Install from Disk** (4.2+). FBX export is still File > Export > FBX, and BZepeto Send exports with
ZEPETO's settings (scale 0.01, mask included) for you.

**How is the 1 MB counted?** — the **sum of the texture PNG file sizes** (1 MB = 1024 KB; not the
resolution). The same 512 px map is bigger with noise or an alpha channel. BZepeto checks the size of the
files it will actually send and names the maps to shrink when it is over.

**I painted the mask but the body is not hidden in Unity** — ZEPETO hides body vertices whose mask colour
is **not pure white**. The mask must be named `mask`, unskinned, have the base's vertex count (9,067) and
its colours must be in the FBX. BZepeto Send exports it that way — if you exported by hand, use Send.

**`ZepetoDefaultLight` missing, the avatar is black** — ZEPETO's default light is missing from the scene.
Work in the default scene of the ZEPETO Studio project again, or copy the missing object over from it.

**Does the polygon limit include the skin (body)?** — the limit counts **triangles** of the item meshes
only (not the mask). Look at Triangles in Blender's statistics, not Faces. BZepeto's Send check shows them
against the category limit.

## Rejection reasons (official guide and help centre)

| Reason | BZepeto check |
|---|---|
| Holes / skin through the item in large body types or poses | Pose / Body Clip Test |
| Light components (removed even after approval) | Unity Review |
| Headwear / mask colours mixed with the hair colour ("incomplete") | `(NoColor)` added, Review |
| Item or effect far outside the preview | Size check |
| Particle limits, more than 5 systems, Collision | Unity Review |
| Mask reaching the neck (animated avatars lose the neck) | Mask borders check |
| Unrepresentative or unclear thumbnail | Thumbnail draft (300×300 transparent) |
| Content rules (exposure, weapons, logos ...) | Content checklist |

## Licence

- Blender add-on — GNU GPL v3 or later
- BZepeto is sold on Gumroad; one purchase is one licence for one person
- Unity package and ArmorPaint plugins — BZepeto EULA (one licence per person; what you make is yours;
  do not share or resell the tools)
- ArmorPaint build — zlib licence, © the ArmorPaint authors; fonts and other components under their own
  licences (see the licence files in the download)

BZepeto is an independent tool and is not affiliated with NAVER Z (ZEPETO), the Blender Foundation,
Unity Technologies or the ArmorPaint authors.

© 2026 Chamiseul
