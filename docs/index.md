# BZepeto — ZEPETO Item Creator Suite for Blender, Unity & ArmorPaint

🇺🇸 English | [🇰🇷 한국어](./KO_index.md)

> BZepeto is an independent tool made by Chamiseul (ChamIseul Creator). It is not made,
> endorsed or supported by NAVER Z (ZEPETO), the Blender Foundation, Unity Technologies or
> the ArmorPaint authors.

![BZepeto](assets/bzepeto2.jpg)

The whole route of a ZEPETO item in one place: build it in Blender, paint it in ArmorPaint,
and hand it to ZEPETO Studio in Unity — without exporting, importing and wiring materials
by hand at every step.

```
Blender  ──①──>  ArmorPaint  ──②──>  Blender
   │                  └────③────>  Unity (ZEPETO Studio)
   └──────────────④──────────────>  Unity (ZEPETO Studio)
```

① the mesh goes to ArmorPaint live ② painted textures come back ③ textures go straight to
Unity ④ the finished item goes to Unity, checked and packaged

**Pick a tool in the menu on the left:**

| Page | What is in it |
|---|---|
| [Blender Add-on](blender.md) | install, loading the base character, checks and Send, Review Tools, face expressions |
| [Unity Package](unity.md) | install, automatic import and ZEPETO shaders, review menu, live preview |
| [ArmorPaint](armorpaint.md) | install, live link, **node samples for beginners**, ZEPETO Mode, stitches |
| [Help & FAQ](help.md) | troubleshooting, frequent questions, rejection reasons, licence |

---

## What you need

| | |
|---|---|
| OS | Windows 10 / 11, 64-bit |
| Blender | 4.5 or later (tested on 4.5 – 5.3) |
| Unity | ZEPETO Studio project, **Unity 2020.3.9f1** |
| GPU | DirectX 12 capable (for ArmorPaint) |
| ZEPETO base character | `creatorBaseSet_zepeto.fbx` from ZEPETO's creator resources — it is ZEPETO's file, so it is **not included** |

## Your download

Gumroad gives you one file, `BZepeto_<version>.zip`. Unzip **only this file** (right-click >
**Extract All**). The `BZepeto_<version>` folder it makes holds:

| File | What it is | Install |
|---|---|---|
| `bzepeto_blender-<version>.zip` | Blender add-on | [Blender page](blender.md#1-install) |
| `com.bzepeto.unity2020-<version>.tgz` | Unity package for **ZEPETO Studio (Unity 2020.3.9)** | [Unity page](unity.md#1-install) |
| `BZepeto_ArmorPaint_<version>_win64.zip` | ArmorPaint with the BZepeto plugins enabled and the node samples (`Template`) | [ArmorPaint page](armorpaint.md#1-install) |
| `SHA256SUMS.txt` | checksums to verify the downloads | — |

!!! note "Do not unzip the Blender add-on"
    Blender installs `bzepeto_blender-<version>.zip` as it is. Unzip only the outer
    `BZepeto_<version>.zip` and the ArmorPaint zip.

This guide is the only manual — there are no README files in the download.

**Updating?** Gumroad emails you when a new version is posted; download the new
`BZepeto_<version>.zip` from your **Gumroad Library** and install all three files. The Blender
add-on and the Unity package replace the old ones; ArmorPaint goes into a new folder.

## Where BZepeto keeps its files

Everything lives under `%USERPROFILE%\BZepeto`. Put the base character in
`%USERPROFILE%\BZepeto\Samples\creatorBaseSet_zepeto.fbx` (or point the add-on preferences at it).
Blender and Unity both use `%USERPROFILE%\BZepeto\HotExport` as the hand-over folder, so there is
nothing to set up between them. To move everything, set the environment variable `BZEPETO_HOME`
(e.g. `D:\BZepeto`) and restart Blender and Unity.

---

## What's New

### v1.2.0 — Major update

!!! warning "Update all three tools together"
    Install the v1.2.0 Blender add-on, Unity package **and** ArmorPaint. Unzip ArmorPaint into
    a **new folder** and point **ArmorPaint Executable** at it.

**All 10 ZEPETO shaders, end to end** — pick the shader per item in Blender (Lit, Cloth, Fur,
HairAlpha, Sparkle, Iridescence, Prism, CustomEnv, Toon, Detail Normal); ArmorPaint's **ZEPETO Mode**
exports exactly the maps that shader reads; Unity sets shader, slots, keywords and factors by itself.

**Fewer review rejections** (ZEPETO's current guide, 2025–2026)

- **Pose / body clip test**: ZEPETO's 10 preview poses × 2 body types × 5 deformations, skin coming
  through the item marked in red (leg lifts through short skirts, holes in large body types)
- **Face expressions**: the 249 ZEPETO expression shape keys on the base character, transferred to
  headwear and masks so they follow the face; per-expression clip test; name and order checks
- Category triangle limits updated (socks 3,500, nail art 1,500); warnings for a mask reaching the
  neck/hands/feet, items far outside the preview, flat hair cards, a showing scalp, swing bones on bangs
- Over 1 MB of textures: which map to shrink to what size, and a **Shrink Textures to 1 MB** button
- Hair on a non-hair item (no hair colour) and hair cards invisible from behind are flagged
- Unity: "(NoColor)" added to headwear/mask materials; Light components, particle limits and
  particles without material or texture (white squares), non-ZEPETO shaders, Color Grading and fur
  length checked; thumbnail draft with particles; Import BlendShapes switched on
- Review Tools: head size test, baby hairs drawn in front, FX joint, female/custom torso fitting,
  content checklist

**ArmorPaint** — 13 **BZepeto nodes** with a finished **sample material for each** (Template folder),
ZEPETO viewport preview, animated painting with a pose clip, emission in its own colour, rebuilt from
current ArmorPaint sources

**CustomEnv (gems, high gloss)** — an HDRI set on the item lights ArmorPaint's viewport and becomes
the Unity reflection cubemap

**One download** — all three tools in one file, `BZepeto_1.2.0.zip`, with checksums; the ArmorPaint
folder no longer includes ArmorPaint's downloaded brush and mask cache, so it is smaller

**Hair quality** — strand direction check, **Sort Hair Layers**, alpha check, clean strand ends

**Fixes** — textures painted in Blender without saving arrived blank; Unity live body shape / pose
preview; normal maps, metallic/smoothness, emission and sheen colours, colour space, cut-out
transparency in Unity

### v1.0.0 — First release

- Blender add-on: ZEPETO checks and Send, swing bone wizard, body shape, wearables, playground
- ArmorPaint live link: paint while you model, smart ZEPETO materials, automatic stitches
- Unity package for ZEPETO Studio (Unity 2020.3.9): hot folder import and automatic ZEPETO shaders

© 2026 Chamiseul
