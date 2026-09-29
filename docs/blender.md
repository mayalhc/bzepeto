# Blender Add-on

🇺🇸 English | [🇰🇷 한국어](./KO_blender.md)

The red boxes in the pictures are what you click, in the order of their numbers.

## 1. Install

1. In Blender: **Edit > Preferences > Add-ons**, click **▼** at the top right, **Install from Disk**
2. Pick `bzepeto_blender-<version>.zip` — the zip itself, **do not unzip it**
3. Type `BZepeto` in the search box and make sure the add-on is ticked **①**
4. Open it with the small arrow and set **ArmorPaint Executable** **②** to `ArmorPaint.exe` in the
   folder where you unzipped ArmorPaint (see [ArmorPaint](armorpaint.md#1-install))

![Blender preferences](assets/guide/bl-prefs.png)

**Base Character FBX** points at ZEPETO's `creatorBaseSet_zepeto.fbx` (default
`%USERPROFILE%\BZepeto\Samples\`). BZepeto does not include it — download it from ZEPETO's creator
resources.

## 2. The BZepeto tab and the base character

1. In the 3D viewport press **N**, then click the **BZepeto** tab **①** on the right edge
2. In **Wearables**, press **Load ZEPETO Base Character** **②**
3. For headwear and masks, use **Load with Face Expressions** **③** instead: the base also gets
   ZEPETO's 249 face expressions

![Load the base character](assets/guide/bl-load-base.png)

## 3. Rigging

- **Bone counter** — compares your rig with ZEPETO's 104-bone base skeleton and counts the swing
  bones you added
- **Pose** — switch between T-pose and A-pose. Going back restores the saved rig instead of rotating
  again, so the shoulders do not drift after repeated switches
- **Weights** — transfer, mirror, limit to 4 influences
- **Bone Cleaner** — remove unused bones

### Swing bones (hair, skirts, ribbons)

1. In Edit Mode, **select the edge runs** the chains should follow (four vertical runs on a skirt =
   four chains)
2. The panel tells you what it will build first: *"4 chain(s), 12 bone(s)"*
3. Choose bones per chain, a preset (hair, ribbon, skirt, coat, accessory), the bone to hang from
   and the weight radius
4. **Make Swing Chains**

Bones are named the way ZEPETO reads them: `<joint> physics <drag> <angle drag> <restore drag>`.
ZEPETO recommends 2–5 chains per item. **Remove Physics Naming** strips the physics part again.

## 4. Body shape

Eight sliders — height, shoulder width, chest, waist, pelvis, leg length, neck, head size — with
**Realtime** to see the character change while you drag. Leg length moves the bones the way the
ZEPETO SDK does, so the feet stay on the ground.

## 5. Wearables

`Import Clothing (FBX)` (the Top / Bottom / Full / Head Accessory buttons) → `Align Mesh to Base Body`
→ `Make Garment Rig` → `Bind Garment To Character` → `Refit Clothing To Body`. **Auto Mask from Items**
paints the body black where the items cover it (ZEPETO hides those parts).

## 6. Send to ZEPETO

1. Select the item and choose its **Category** **①** (e.g. Skirt) — the limits of that category
   show under it
2. Press **Check** **②**. The result list shows every rule: ✔ passed, ⚠ warning, ✖ must be fixed
3. A failed rule comes with the button that fixes it **④** (e.g. **Fix Transforms**,
   **Create ZEPETO Material**, **Shrink Textures to 1 MB**)
4. When nothing is red, press **Send to Unity** **③**

![Send to ZEPETO](assets/guide/bl-send.png)

The check covers 19 rules: triangles, materials, texture size (512 px) and **1 MB of texture files
in total**, UVs, bone influences, transforms, names, mask, hair, item size, face expressions and more.

**ZEPETO Shader** — pick the item's shader in the Send panel (Auto lets Unity guess from the names).
It travels with the item to Unity and sets ArmorPaint's ZEPETO Mode.

| Shader | For |
|---|---|
| Lit | standard items |
| Cloth | velvet-like sheen |
| Fur | shell fur |
| HairAlpha | hair with see-through strands |
| Sparkle | glitter |
| Iridescence | pearl, holographic |
| Prism | clear coat, enamel |
| CustomEnv | gems, high gloss — reflects its own HDRI |
| Toon | cel shading |
| Detail Normal | tiled fine detail |

**Hair (HairAlpha)** — the hair check warns when strands do not run along UV V, when the base colour
has no alpha, or when the card layers are out of order. **Sort Hair Layers** puts the inner cards first.

**CustomEnv** — set **Env HDRI** (`.hdr`, a small 2:1 panorama such as 256×128 or 512×256; it counts
toward the 1 MB). It becomes the reflection cubemap in Unity.

**1 MB of textures** — when the total is over, the hint names the maps to shrink ("base 1024 -> 512 px
(about 700 KB)") and **Shrink Textures to 1 MB** makes resized copies next to the originals and uses
them in the item's materials. The originals stay.

## 7. Review Tools (under Send)

1. **Pose / Body Clip Test** **①** — puts the dressed character through ZEPETO's 10 preview poses
   (including leg lifts and kicks) on the DEFAULT and ANIME body types and the DEFAULT and 1–4
   deformations. **Quick** tests only the default body type with the large deformations 3 and 4
2. The result **②** names the worst poses. Items with holes in large body types have been rejected
3. To see where: select the body (`mask`), switch to **Weight Paint** and pick the `BZ_Clip` group —
   the skin that comes through is red **①**

![Where the skin comes through](assets/guide/bl-clip-red.png)

**Face expressions (headwear, accessory mask, special mask)**

- **Add Face Expressions to Base** **③** — creates the 249 expressions (official names and order) on
  the loaded base. Only the movement of each expression is applied to *your* ZEPETO base; a different
  base is skipped with a message
- **Transfer Face Expressions** **④** — select the face items first: each part follows the face under
  it (full within 1 cm, fading out by 4 cm). Expressions that would not move the item are left out
- **◀ Rest ▶** **⑤** — shows one expression at a time on the face and the items
- **Expression Clip Test** **⑥** — every expression and the guide's pairs (jawOpen + mouthClose,
  jawOpen + cheekPuff, brows with blinks): face skin coming through the item

![Review Tools](assets/guide/bl-review.png)

The same panel has the hair **Head Size Test** (the smallest / largest head the app uses), **Mark
Selected as Front Hair**, **Add FX Joint** for effects, **Fit Custom Body Part** and the content
checklist (tick it once you have gone through ZEPETO's content rules).

## 8. Painting in ArmorPaint

1. Select the item and press **Paint in ArmorPaint** **①** — ArmorPaint opens with the item
2. Painted textures come back by themselves while **Auto Receive** **③** is on; **Pull Textures from
   ArmorPaint** **②** fetches them by hand
3. **Stitch Selected Edges** draws stitches on the selected seam edges (Edit Mode) as their own
   ArmorPaint layer; **Animated (pose clip)** sends the item with its armature and action so you can
   paint in a stretched pose

![ArmorPaint panel](assets/guide/bl-armorpaint.png)

More on the ArmorPaint side: [ArmorPaint](armorpaint.md).

## 9. ZEPETO Playground

ZEPETO Studio's play-mode menu rebuilt in Blender: 10 animations, camera, body types, the 13 SDK
deformations and the space — so you can check the item before it reaches Unity.

> The playground needs a capture from your own ZEPETO Studio project once: in Unity, enter Play mode
> in the playground scene and choose **BZepeto > Capture Playground For Blender**.
