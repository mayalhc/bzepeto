# ArmorPaint

🇺🇸 English | [🇰🇷 한국어](./KO_armorpaint.md)

The red boxes in the pictures are what you click, in the order of their numbers.

## 1. Install

1. Unzip `BZepeto_ArmorPaint_<version>_win64.zip` into a **new folder**, e.g.
   `C:\Tools\BZepeto_ArmorPaint` (avoid *Program Files* — ArmorPaint cannot save its settings there;
   do not unzip over an older version or copy old plugins across)
2. Run `ArmorPaint.exe` once to check the window opens. The BZepeto plugins are already on
3. In Blender, set **ArmorPaint Executable** to this `ArmorPaint.exe`
   (see [Blender, Install](blender.md#1-install))

> Why a whole ArmorPaint build and not just a plugin? The live link needs a small change to ArmorPaint
> itself: a normal ArmorPaint stops updating the moment you click back into Blender. The build is
> compiled from ArmorPaint's zlib-licensed source, and every change is marked in the source
> (`BZepeto (altered source)`).

## 2. New to ArmorPaint? Start with the node samples

The **Template** folder in the ArmorPaint folder has a finished material (`.arm`) for each of the 13
BZepeto nodes, already wired into colour, opacity, height, metallic and roughness the way ZEPETO items
use them. `Template\_Overview.png` shows them all:

![The 13 node samples](assets/guide/ap-template-overview.png)

**Put a sample on your item (3 steps)**

1. Drag an `.arm` file from the `Template` folder onto the ArmorPaint window — or press **Import** **①**
   in the Materials panel (bottom right) and pick it
2. The material appears in the Materials panel: click it **②**

   ![Import and pick a sample](assets/guide/ap-import.png)

3. Open the **Plugins** tab **①** and press **Fill Layer With It** **②** — the whole layer takes the
   material. To paint it only in places, use the brush instead

   ![Fill Layer With It](assets/guide/ap-fill.png)

**Changing a sample** — double-click the material to open its nodes. Most samples go
*node → Mix RGB → Base Color*: change the two colours of the **Mix RGB** node to recolour without
touching the pattern, or change the values on the BZepeto node:

| File | ZEPETO shader | Try changing |
|---|---|---|
| 01 Hair Strands | HairAlpha | Strands, Taper, Length Variation, Seed |
| 02 Hair Root to Tip | HairAlpha | Root, Tip, Grain |
| 03 Floral Lace | Lit (transparent) | Motif Scale, Net Density, Thread, Motifs |
| 04 Lace Mesh | Lit (transparent) | Scale, Hole |
| 05 Weave Denim | Cloth | Scale, Pattern (0 plain, 1 twill, 2 satin), Contrast |
| 06 Knit Wool | Cloth | Scale |
| 07 Quilt Puffer | Lit | Scale, Line |
| 08 Sequins | Sparkle | Scale, Density, Seed |
| 09 Gem Facets | CustomEnv | Facets, Scale |
| 10 Hammered Metal | Lit (metal) | Scale |
| 11 Edge Wear | Lit | Amount, Break Up (reads the mesh edges — little shows on a flat face) |
| 12 Toon Hatching | Toon | Scale, Angle, Width |
| 13 Fur Strands | Fur | Scale |

- Hair (01, 02) is grey on purpose: the app multiplies in the hair colour the user picks
- Lace (03, 04) is transparent: turn **Transparent** on in the ZEPETO Mode panel so the alpha is exported
- Every pattern is procedural, so it stays sharp at ZEPETO's 512 px (256 px recommended)

## 3. Paint while you model (live link)

1. In Blender select the item and press **Paint in ArmorPaint**
2. ArmorPaint opens with the item; the **BZepeto Live Link** panel **①** in the Plugins tab reads
   **CONNECTED** (before that: *WAITING FOR BLENDER*)
3. With **Auto Push** on in Blender, your edits are sent again 0.8 s after you stop — the paint layers
   stay

![Plugins tab](assets/guide/ap-plugins.png)

An item without a material gets a ZEPETO-ready one on the way out.

**Animated (pose clip)** — turn it on in Blender's ArmorPaint panel to send the item with its armature
and action (e.g. a ZEPETO animation clip). Scrub ArmorPaint's timeline to the pose where a seam
stretches and paint there.

## 4. BZepeto Materials (smart materials)

In the **BZepeto Materials** panel **②**: **Denim, Cotton, Knit, Leather, Metal, Base**. Press one, then
**Fill Layer With It**, and paint on top. They are procedural, so they stay crisp at 512 px, and they
already match ZEPETO's texture channels.

## 5. ZEPETO Mode

The **ZEPETO Mode** panel **③** matches the item's ZEPETO shader (it follows the shader set in Blender;
**< Previous / Next >** changes it by hand). The export then writes the maps that shader reads, and the
panel lists what each channel means in that mode.

- **Setup Base Layer (neutral values)** — a fill layer with the mode's neutral values to start from
- **Transparent (export base alpha)** — keep the base colour's alpha (opaque items ship a smaller file)
- **Emission map** — export the glowing parts in their colour
- **Viewport preview** — a ZEPETO-like look of the mode in the Lit viewport (hair highlight bands, toon
  steps, pearl sheen, clear coat, glints). A close approximation, not the Unity shader itself

> **Hair:** paint the strands in **grey** — the app multiplies them by the user's hair colour.
> Alpha = strands, Height = highlight shift (0.5 = none), Metallic = secondary highlight.

## 6. BZepeto nodes

In the material node menu under **BZepeto ZEPETO**:

| Node | |
|---|---|
| Hair Strands / Hair Root to Tip | strands with alpha, shade and highlight shift; root-to-tip light |
| Floral Lace / Lace Mesh | Chantilly-style lace (opacity, height, motif mask); simple mesh net |
| Weave / Knit / Quilt | fabric structures |
| Sequins / Gem Facets / Hammered Metal | accessories and jewellery |
| Edge Wear / Toon Hatching / Fur Strands | wear, toon brush strokes, fur pattern |

## 7. Stitches

1. In Blender Edit Mode, select the seam edges
2. Press **Stitch Selected Edges** — it shows *"Will draw: N seam(s), M stitch(es)"* first
3. The stitches appear in ArmorPaint as their **own layer**, so you can recolour or erase them

| Setting | |
|---|---|
| Dash / Gap / Width | thread length, spacing and thickness in millimetres of the real item |
| Color / Roughness | thread colour and roughness |
| Target | `ArmorPaint` (a layer, recommended) or `Blender` (drawn on the material) |

A seam on the border of two UV islands is stitched on **both** pieces, like real clothing.

## 8. Sending the textures

| Button in ArmorPaint | |
|---|---|
| **Send to Blender** | Blender picks the textures up by itself (**Auto Receive**) |
| **Send to Unity** | goes straight into your ZEPETO Studio project |
| **Send to Both** | both |
| **Size 512 / 1024 / 2048 / 4096** | size of the delivered textures — you keep painting at full resolution |

> ZEPETO allows 512 px textures and 1 MB per item, which is why 512 is the default.
