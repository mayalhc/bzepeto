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

**ZEPETO Files Folder** **③** is the **one folder** for the ZEPETO files the add-on reads (default
`%USERPROFILE%\BZepeto\Samples\`): put ZEPETO's `creatorBaseSet_zepeto.fbx` (the base character) and
`Female_Torso.fbx` (the female reference for Body Shape > Female) in it — they are found by name, so a
download called `Female_Torso.fbx.fbx` works too. Right below, the preferences show whether each one was
found. BZepeto does not include them — download them from ZEPETO's creator resources. Files set separately
in an earlier version keep working.

## 2. The BZepeto tab and the base character

1. In the 3D viewport press **N**, then click the **BZepeto** tab **①** on the right edge
2. In **Wearables**, press **Load ZEPETO Base Character** **②**
3. For headwear and masks, use **Load with Face Expressions** **③** instead: the base also gets
   ZEPETO's 249 face expressions

![Load the base character](assets/guide/bl-load-base.png)

**Folding the panels** — the parts of the BZepeto panels (Pose, High Heel, Weights, Body Shape, the
Send rules ...) collapse with the **▸/▾** arrow in their header. The folded row keeps the status that
matters (the current pose, the heel angle, the swing chain count, the weight problem count ...), so
you can fold what you are not using and keep the panel short. Blender remembers what you folded.

## 3. Rigging

- **Bone counter** — compares your rig with ZEPETO's 104-bone base skeleton and counts the swing
  bones you added
- **Pose** — switch between T-pose and A-pose. Going back restores the saved rig instead of rotating
  again, so the shoulders do not drift after repeated switches
- **Weights** — transfer, mirror, limit to 4 influences
- **Bone Cleaner** — remove unused bones

### High heels

The **High Heel** box under Pose lifts the heels. The toes stay flat and **in place** on the floor and
the body rises with them.

1. **Heel Angle** lifts the heels (degrees); **Sole (cm)** adds a platform under the toes
2. Model the shoe on the raised feet
3. Select it: **Make Garment (Shoes)**, then **Bind Garment To Character**. The shoe stays where you
   modelled it; inside, it is bound to the flat foot ZEPETO skins it on
4. **Export / Send**: only a Shoes item carries ZEPETO's heel data (the `expressions` bones). ZEPETO
   poses the avatar's feet, toes and hips from it, so the shoe is worn as it looks in Blender. Tops,
   dresses and other items never carry it

- **Flat Feet** turns the heel off
- **Read Heel From Rig** takes the heel of an imported ZEPETO heel item onto the sliders
- The heel is only a pose, never baked into the rest pose; body sliders and T/A switches keep it

### Gloves, nails and rings (Glove Test)

- **Make Garment** for hand items (gloves, nails, rings, bracelets) weights every vertex from **its own
  finger's skin only** -- no bones of the next finger in the gap between two fingers
- **Nails** go on their finger's **tip bone**, one bone per piece at 100%; **rings** on one bone per piece
- **Glove Test > Fist** curls both hands into a fist as you raise it: watch gloves, rings and nails follow
  the fingers. Only a pose -- the export always uses open hands

### Skirts, dresses and coats

Made as Skirt, Dress or Outerwear, a garment's leg weights change sides **gradually** around the body (half
and half at the front and back middle, one leg at the sides), so a stride no longer splits it open in the
middle like trousers

### Swing bones (hair, skirts, ribbons)

1. In Edit Mode, **select the edge runs** the chains should follow (four vertical runs on a skirt =
   four chains)
2. The panel tells you what it will build first: *"4 chain(s), 12 bone(s)"*
3. Choose bones per chain, a preset (hair, ribbon, skirt, coat, accessory), the bone to hang from
   and the weight radius
4. **Make Swing Chains**

**Auto Skirt Swing** puts swing chains on a skirt, dress or long coat in one go. Pick Skirt, Dress or
Outerwear in Wearables > ZEPETO Category and the section shows the steps in order: **1. Make Rig → 2. Bind
To Character → 3. Auto Skirt Swing**. Shorts or a lining inside the skirt, in the same mesh, keep following
the legs; the chains go on the outer cloth. No edges to pick: chains (4 by default, 2-5) from the hip joints
down to the hem, just inside the cloth.

![Auto Skirt Swing](assets/guide/bl-swing.png)

**①** the ZEPETO category (Skirt) **②** the three buttons, in order **③** when done the section shows the chain count
(`MySkirt: 4 swing chains`). The four vertical bars in the viewport are the swing chains hanging from the thighs.

**Find Crossing Faces** — when the waist or overlapping parts of a garment look jagged in a big pose, the mesh often
**cuts through itself from the start** (layers, flaps and belt loops exported from Marvelous Designer). This button
selects, in Edit Mode, the faces that cut through other faces in the current pose. Weights cannot fix it: move the
layers apart in MD or delete the hidden inner faces.

**Follow the Legs** (on by default) — ZEPETO's default swing has no leg colliders, so a chain hanging from the
hips stays put when a leg steps forward and **the thigh comes out through the skirt**. The chains therefore sit
on the diagonals (front-left, front-right, back-left, back-right), **each hanging from the thigh on its side**:
the skirt moves with the leg and swings on top of that. Ankle-length skirt, measured: big stride (45 deg) 694 ->
41 leg points out, normal stride (30 deg) 220 -> 0. Use an even number of chains (2 or 4; with an odd number one
hangs from the hips at the back).

The top keeps its weights and the swing grows towards the hem (**Swing at the Hem**, 0.7 by default — the least
poke-through with the chains on the thighs; 0.4 with Follow the Legs off). Run it again to redo the chains.

Bones are named the way ZEPETO's SDK reads them: `<joint>_physics_<drag>_<angle drag>_<restore drag>`
(e.g. `hair_01_physics_10_15_20`). ZEPETO recommends 2–5 chains per item. **Remove Physics Naming** strips the
physics part again.

!!! warning "Swing bones made before 1.3.1"
    Earlier versions named them with **spaces** (`hair_01 physics 10 15 20`), but ZEPETO only swings bones whose
    name contains `_physics` — so they did not move in Unity or ZEPETO. Press **Fix Swing Names** once and send
    the item again (same values, weights kept). The Send check points such bones out.

## 4. Body shape

Eight sliders — height, shoulder width, chest, waist, pelvis, leg length, neck, head size — with
**Realtime** to see the character change while you drag. Leg length moves the bones the way the
ZEPETO SDK does, so the feet stay on the ground.

## 5. Wearables

`Import Clothing (FBX)` (the Top / Bottom / Full / Head Accessory buttons) → `Align Mesh to Base Body`
→ `Make Garment Rig` → `Bind Garment To Character` → `Refit Clothing To Body`. **Auto Mask from Items**
paints the body black where the items cover it (ZEPETO hides those parts).

**Headwear / hair pivot** — ZEPETO's head template (`HEADWEAR_Guide`) puts the **head joint at the
origin** (the app parents hair, hats and glasses to the character's head). BZepeto's character has its
head ~0.89 m up, so an item made on the guide would land at the feet. The `Head Accessory` import and
`Make Head Acc` / `Make Hair Rig` recognise that layout and lift the item onto the head (unweighted
pieces go on the head bone). The sent item sits in ZEPETO exactly where a guide-made one does
(checked on the Unity conversion).

**Touching up the mask by face** — ZEPETO hides every **vertex** that is not white and removes every
triangle touching one, so painting finer (a subdivided copy) changes nothing. Work on the result
instead, face by face:

- **Show Removed Triangles** — draws on the body, in red, every triangle ZEPETO removes (follows the
  pose and the body shape). Auto Mask turns it on.
- Select the body (`mask`), Tab into Edit Mode, select faces: **Mask Faces** removes them,
  **Unmask Faces** brings them back. Mask Faces **never removes a face outside the selection** (so a
  face at its edge may stay); to remove all of it, turn on **Cover Whole Selection** in the redo panel
  (the ring just outside goes too).
- **Select Removed Faces** selects what is removed now — handy for touching up an Auto Mask.

### Marvelous Designer

Send the ZEPETO character to Marvelous Designer, make the garment there, and bring it back **already
worn**. It is the **MD Live (Marvelous Designer)** panel in the BZepeto tab.

![MD Live panel](assets/guide/bl-md-live.png)

**①** Start Live **②** Get Garment Now **③** Send Body to MD **④** Import Garment from MD **⑤** Open MD Plug-in Folder

**Once**

1. Press **Open MD Plug-in Folder**.
2. In Marvelous Designer, **Plug-in ▸ Plug-in Manager ▸ Add** `bz_live.py`. Add `bz_load_avatar`
   (load the avatar) and `bz_send_garment` (send the garment) too if you want the one-shot steps.

**Live (automatic)**

1. In Blender, **Start Live**.
2. In Marvelous Designer, click `bz_live` in the Plug-in menu once (again to stop). The panel shows
   `MD: bz_live running` when the two are connected.

From then on there is nothing to press:

- Change the **pose, body shape or high heel** in Blender and the body is sent again; Marvelous
  Designer swaps the avatar, simulates **MD Simulate Frames** (30 by default) and sends the garment
  back.
- The garment that comes back is rigged as the **Wear As** category and worn, replacing the one Live
  brought in before.
- After editing the garment in Marvelous Designer, **Get Garment Now** brings it over at once.
- Garments are received in Object Mode; in another mode the panel says "Garment waiting" and it is
  worn when you return.

**One-shot — sending the character**

1. In Blender, **Send Body to MD** writes the ZEPETO body, in its current pose and shape, to the shared
   folder as OBJ.
2. In Marvelous Designer, `bz_load_avatar` from the Plug-in menu loads it as the avatar — no import
   dialog. Sending again replaces the avatar instead of adding a second one.

**One-shot — bringing the garment back**

1. In Marvelous Designer, `bz_send_garment` writes the garment (no avatar) to the shared folder.
2. In Blender, **Import Garment from MD** opens with the newest garment picked. Choose its **ZEPETO
   Category** and it is rigged that way and worn (the same as Make Garment Rig + Bind).

**Good to know**

- Left empty, the shared folder is `%USERPROFILE%\BZepeto\MDLive`. The folder and the scales are
  remembered.
- Units: garments sent by the BZepeto plug-ins carry a note of their unit and always fit. A garment
  exported by hand from MD's menu uses **Import Scale**, and if it still does not sit on the body the
  right unit (mm, cm, inch or m) is found by itself.
- Topstitches are switched to texture only while exporting (and back afterwards), so the file stays
  light. Hand exports lose their stitch, button and zipper meshes before they are read (**Skip Stitches
  & Trims**) — a 300 MB shirt comes in within a couple of seconds.
- ZEPETO's triangle limits are easy to exceed: raise **Particle Distance** in Marvelous Designer for a
  coarser mesh.

## 6. Send to ZEPETO

1. Select the item and choose its **Category** **①** (e.g. Skirt) — the limits of that category
   show under it
2. Press **Check** **②**. The result list shows every rule: ✔ passed, ⚠ warning, ✖ must be fixed —
   by default only the **problems** are listed; **Show all** below it expands the full list
3. A failed rule comes with the button that fixes it **④** (e.g. **Fix Transforms**,
   **Create ZEPETO Material**, **Shrink Textures to 1 MB**)
4. When nothing is red, press **Send to Unity** **③**

![Send to ZEPETO](assets/guide/bl-send.png)

The check covers 20 rules: triangles, materials, material names, texture size (512 px) and **1 MB of
texture files in total**, UVs, bone influences, transforms, names, mask, hair, item size, face
expressions and more.

**Material names (ZEPETO's rule)** — ZEPETO's guide names a material *item name + `_shd`*
(e.g. `TOP_turtleneck_shd`), and the mesh starts with its type: dress `DR`, top `TOP`, bottom and skirt
`BTM`, headwear `HEADWEAR`. A custom body part keeps `skin`.

- A default name (`Material.001`, `lambert2`) or a name without `_shd` gets a warning with the name to
  take instead (e.g. `Material -> TOP_shirt_1_shd`)
- **Fix Material Names** renames them in one go: a default name follows the mesh name, numbered when
  there are several. Rename the mesh yourself
- Materials BZepeto creates are `<mesh name>_shd` too

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

**Mascot head expressions** -- a head bigger than the face and away from it (special mask, costume head)

Transfer Face Expressions (below) is for items that hug the face (within 4 cm); a mascot head is out of
its reach, and its eyes and mouth are neither where nor as big as the face's.

1. Select the head, Tab into Edit Mode, select its **eye** vertices, **Mark Eyes** (both eyes at once is
   fine: left and right are split for you). The same for **Mark Brows** and **Mark Mouth**; **Unmark ...**
   takes vertices back out
2. **Transfer to Mascot Head** matches each part to the same part of the face by centre and size, and bakes
   the face's movement **scaled to the part**: an eye 1.3x the face's blinks 1.3x as far
3. The edges of the parts blend into the head, the rest of it stays still. Check with ◀ Rest ▶ or Play
   Expressions
4. The face shape sliders (face length, eye size ...) are left out, so the mascot keeps its shape whatever
   the user's face settings (**Face Shape Sliders Too** puts them in)

The marks are mesh attributes, not bone weights: the Send checks and the FBX leave them out. For an eye to
close, the head needs a lid to close with (skin above the eye).

**Face expressions (headwear, accessory mask, special mask)**

- **Add Face Expressions to Base** **③** — creates the 249 expressions (official names and order) on
  the loaded base. Only the movement of each expression is applied to *your* ZEPETO base; a different
  base is skipped with a message
- **Transfer Face Expressions** **④** — select the face items first: each part follows the face under
  it (full within 1 cm, fading out by 4 cm). Expressions that would not move the item are left out
- **◀ Rest ▶** **⑤** — shows one expression at a time on the face and the items
- **Expression Clip Test** **⑥** — every expression and the guide's pairs (jawOpen + mouthClose,
  jawOpen + cheekPuff, brows with blinks) on the ZEPETO base face, checked two ways: face skin coming
  **through** the item, and the item **following** the face. An expression that moves the face while the
  item stays put is reported as "stay behind", and those parts go into the item's `BZ_Follow` group (red in
  Weight Paint) -- run Transfer Face Expressions again
- **Play Expressions** -- puts every expression on the timeline, on the base face and the face items (10
  frames each, a marker naming it): press **Play** (Space) and watch the item follow the face. Expression
  Clip Test builds the same animation after testing, marks the expressions that failed (`! jawOpen: 124
  through, 119 behind`) and jumps to the first one. **X** next to it removes the keys and markers and
  restores the frame range

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

### Set outfits — separate maps for the top and the bottom (UDIM)

When a top and a bottom are one item (a dress, a set outfit), each material can have its own
textures (ZEPETO's Dress category allows 2 textures, 1 MB in total).

1. Make two materials — e.g. `DR_227_TOP` and `DR_227_BTM`
2. In the UV editor put the top's UVs in the **0–1 square (1001)** and the bottom's in the **square to
   its right (1002, U 1–2)**. Two materials without moving any UVs also works — they become 1001, 1002
   in material order
3. **Paint in ArmorPaint** — ArmorPaint opens `item.1001` and `item.1002` as UDIM tiles; paint each
4. The maps that come back (`item_base.1001.png`, `item_base.1002.png` ...) go to **their own material**
   only
5. **Send to Unity** — the UVs are moved into 0–1 inside the FBX only (your Blender scene is left as it
   is) and Unity hooks every material up to its own maps

Your Blender materials are created in ArmorPaint **by name and colour**, each already filled on its own
tile (one layer per material in Layers). A material an FBX import left black comes across as neutral grey,
so it is easy to paint over.

The Send UV check reads *"one texture set per material (DR_227_TOP 1001, DR_227_BTM 1002)"* when the
split is right, and warns when one material spreads over two tiles.

## 9. ZEPETO Playground

ZEPETO Studio's play-mode menu rebuilt in Blender: 10 animations, camera, body types, the 13 SDK
deformations and the space — so you can check the item before it reaches Unity.

> The playground needs a capture from your own ZEPETO Studio project once: in Unity, enter Play mode
> in the playground scene and choose **BZepeto > Capture Playground For Blender**.

## 10. Studio Render

Shoot the character in its items in a studio, like the ZEPETO character builder's promotional
pictures. It is the **Studio Render** panel in the BZepeto tab.

![Studio Render panel](assets/guide/bl-studio.png)

The numbers follow the steps below: **①** Start/Exit Studio **②** Background **③** Light **④** Camera
**⑤** Character **⑥** Render

1. **Start Studio** — a seamless backdrop (the floor curving up into the wall), soft three-point
   light (key, fill, rim) and an 85 mm portrait camera are set up around the character, and the
   viewport looks through the camera, **rendered** with the engine picked under Render (EEVEE or
   Cycles; switching it switches Blender's render engine). The character is shot in the pose it has (A/T pose, high
   heel, a playground animation frame).
2. **Background** — White, Gray, Pink, Peach, Butter, Mint, Sky, Lavender, Dark, or a **Custom**
   colour.
3. **Light** — Neutral, Warm, Cool, Pink, **Rainbow** (three hues on the three lights), and
   **Brightness**.
4. **Camera** — **Full Body / Upper Body / Head** framing, **Format** (1:1, 4:5, 9:16, 16:9),
   **Depth of Field** (soft background). After changing the pose, body or items, **Frame Again**.
5. **Character** — the builder's **Head Size**, **Lean ↔ Sturdy** (chest, waist, pelvis and
   shoulders together) and **Height**. **Back to Original** puts every body slider back to 0.
6. **Render** — **EEVEE** (fast), **Cycles** (denoised, on the **GPU** — the device in Preferences >
   System, picked automatically when none is set) or **Both** (one picture each).
   **Transparent** gives a PNG with alpha (Cycles keeps the floor shadow). Pictures go to
   `%USERPROFILE%\BZepeto\Renders` (**Open Renders Folder**).

**ZEPETO Shader Look** — items whose ZEPETO shader is set in Send render with its feel: sheen in
the cloth's colour for Cloth and Fur, streaky highlights for HairAlpha, glints for Sparkle, a thin
film for Iridescence, a clear coat for Prism, high gloss for CustomEnv, flat colour for Toon. A
copy is used for the render only, so **the item's materials are never changed**. Unity's and
ZEPETO's preview remain the reference for the real look.

**Exit Studio** removes everything the studio added and puts the render engine, resolution,
camera and world back. Send and Export never take studio objects along.

![EEVEE render (Sky backdrop, Neutral light, Portrait 4:5)](assets/guide/bl-studio-render.png)

!!! note "Face and hair"
    The ZEPETO base character is an untextured grey body: eyes, lips and hair show only with your
    own face texture and hair item.
