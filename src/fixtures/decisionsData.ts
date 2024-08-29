export const data = [
    {
        title: 'Informacion',
        description: `The parameters are as follows:`,
    },
    {
        title: 'Informacion',
        description: `The parameters are as follows:
<br />
from {color}
<br />
The keyword from is always included when defining a relative color, followed by a {color} value representing the origin color. This is the original color that the relative color is based on. The origin color can be any valid {color} syntax, including another relative color.
<br />
<br />

colorspace
<br />
An {ident} denoting the color space of the output color, generally one of the predefined color spaces: srgb, srgb-linear, display-p3, a98-rgb, prophoto-rgb, rec2020, xyz, xyz-d50, or xyz-d65.
<br />
<br />

c1, c2, c3
<br />
Each value can be written as a {number}, a {percentage}, or the keyword none (equivalent to 0 in this case). These values represent the component values for the output color. When using a {number} value, generally 0 to 1 represents the bounds of the color space. Values outside of that range are permitted but will be out of gamut for the given color space. Generally, when using a percentage value, 100% represents 1 and 0% represents 0.
<br />
<br />

A Optional
<br />
An {alpha-value} representing the alpha channel value of the output color, where the number 0 corresponds to 0% (fully transparent) and 1 corresponds to 100% (fully opaque). Additionally, the keyword none can be used to explicitly specify no alpha channel. If the A channel value is not explicitly specified, it defaults to the alpha channel value of the origin color. If included, the value is preceded by a slash (/).

<div>
<div><strong>css</strong></div>
<div>color(from hsl(0 100% 50%) srgb 0.749938 0 0.609579)</div>
<div>/* Computed output color: color(srgb 0.749938 0 0.609579) */</div>
<br />
<div>color(from hsl(0 100% 50%) xyz 0.75 0.6554 0.1)</div>
<div>/* Computed output color: color(xyz-d65 0.75 0.6554 0.1 */</div>
<br /><br />
<div>The following functions use two of the origin color channel values for the output color channel values ('r' and 'b', and 'x' and 'y', respectively), but use a new value for the other output channel value ('g' and 'z', respectively), creating a relative color based on the origin color in each case:</div>
<br />
<div><strong>css</strong></div>
<div>color(from hsl(0 100% 50%) srgb r 1 b)</div>
<div>/* Computed output color: color(srgb 1 1 0) */</div>
<br />
<div>color(from hsl(0 100% 50%) xyz x y 0.5)</div>
<div>/* Computed output color: color(xyz-d65 0.412426 0.212648 0.5) */</div>
<br /><br />
<div><span style="text-decoration: underline;"><strong>&gt; [!NOTE]</strong></span></div>
<div>&gt; As mentioned above, if the output color is using a different color model to the origin color, the origin color is converted to the same model as the output color in the background so that it can be represented in a way that is compatible (i.e. using the same channels). For example, the {{cssxref("color_value/hsl", "hsl()")}} color 'hsl(0 100% 50%)' is converted to 'color(srgb 1 0 0)' in the first case above and 'color(xyz 0.412426 0.212648 0.5)' in the second case.</div>
<br />
<div>In the examples we've seen so far in this section, the alpha channels have not been explicitly specified for either the origin or output colors. When the output color alpha channel is not specified, it defaults to the same value as the origin color alpha channel. When the origin color alpha channel is not specified (and it is not a relative color), it defaults to '1'. Therefore, the origin and output alpha channel values are '1' for the above examples.</div>
<br />
<div>Let's look at some examples that specify origin and output alpha channel values. The first one specifies the output alpha channel value as being the same as the origin alpha channel value, whereas the second one specifies a different output alpha channel value, unrelated to the origin alpha channel value.</div>
<br />
<div><strong>css</strong></div>
<div>color(from hsl(0 100% 50% / 0.8) srgb r g b / alpha)</div>
<div>/* Computed output color: color(srgb 1 0 0 / 0.8) */</div>
<br />
<div>color(from hsl(0 100% 50% / 0.8) xyz x y z / 0.5)</div>
<div>/* Computed output color: color(xyz-d65 0.412426 0.212648 0.0193173 / 0.5) */</div>
<br /><br />
<div>The following examples use {{cssxref("calc")}} functions to calculate new channel values for the output colors that are relative to the origin color channel values:</div>
<br />
<div><strong>css</strong></div>
<div>color(from hsl(0 100% 50%) srgb calc(r - 0.4) calc(g + 0.1) calc(b + 0.6) / calc(alpha - 0.1))</div>
<div>/* Computed output color: color(srgb 0.6 0.1 0.6 / 0.9) */</div>
<br />
<div>color(from hsl(0 100% 50%) xyz calc(x - 0.3) calc(y + 0.3) calc(z + 0.3) / calc(alpha - 0.1))</div>
<div>/* Computed output color: color(xyz-d65 0.112426 0.512648 0.319317 / 0.9) */</div>
<br /><br />
<div><span style="text-decoration: underline;">&gt; [!NOTE]</span></div>
<div>&gt; Because the origin color channel values are resolved to '&lt;number&gt;' values, you have to add numbers to them when using them in calculations, even in cases where a channel would normally accept '&lt;percentage&gt;', '&lt;angle&gt;', or other value types. Adding a '&lt;percentage&gt;' to a '&lt;number&gt;', for example, doesn't work.</div>
<br />
<div>### Formal syntax</div>
<br />
<div>{{csssyntax}}</div>
<br />
<div>## Examples</div>
<br />
<div>### Using predefined color spaces with color()</div>
<br />
<div>The following example shows the effect of varying the lightness, a-axis, and b-axis values of the 'color()' function.</div>
<br />
<h1>#### <strong>HTML</strong></h1>
<br />
<div>html</div>
<div>&lt;div data-color="red-a98-rgb"&gt;&lt;/div&gt;</div>
<div>&lt;div data-color="red-prophoto-rgb"&gt;&lt;/div&gt;</div>
<div>&lt;div data-color="green-srgb-linear"&gt;&lt;/div&gt;</div>
<div>&lt;div data-color="green-display-p3"&gt;&lt;/div&gt;</div>
<div>&lt;div data-color="blue-rec2020"&gt;&lt;/div&gt;</div>
<div>&lt;div data-color="blue-srgb"&gt;&lt;/div&gt;</div>
<br /><br />
<div>#### CSS</div>
<br />
<div>css hidden</div>
<div>div {</div>
<div>width: 50px;</div>
<div>height: 50px;</div>
<div>padding: 5px;</div>
<div>margin: 5px;</div>
<div>display: inline-block;</div>
<div>border: 1px solid black;</div>
<div>}</div>
<br /><br />
<div>css</div>
<div>[data-color="red-a98-rgb"] {</div>
<div>background-color: color(a98-rgb 1 0 0);</div>
<div>}</div>
<div>[data-color="red-prophoto-rgb"] {</div>
<div>background-color: color(prophoto-rgb 1 0 0);</div>
<div>}</div>
<div>[data-color="green-srgb-linear"] {</div>
<div>background-color: color(srgb-linear 0 1 0);</div>
<div>}</div>
<div>[data-color="green-display-p3"] {</div>
<div>background-color: color(display-p3 0 1 0);</div>
<div>}</div>
<div>[data-color="blue-rec2020"] {</div>
<div>background-color: color(rec2020 0 0 1);</div>
<div>}</div>
<div>[data-color="blue-srgb"] {</div>
<div>background-color: color(srgb 0 0 1);</div>
<div>}</div>
<br /><br />
<div>#### Result</div>
<br />
<div>{{EmbedLiveSample("using_predefined_color_spaces_with_color")}}</div>
<br />
<div>### Using the xyz color space with color()</div>
<br />
<div>The following example shows how to use the 'xyz' color space to specify a color.</div>
<br />
<div>#### HTML</div>
<br />
<div>html</div>
<div>&lt;div data-color="red"&gt;&lt;/div&gt;</div>
<div>&lt;div data-color="green"&gt;&lt;/div&gt;</div>
<div>&lt;div data-color="blue"&gt;&lt;/div&gt;</div>
<br /><br />
<div>#### CSS</div>
<br />
<div>css hidden</div>
<div>div {</div>
<div>width: 50px;</div>
<div>height: 50px;</div>
<div>padding: 5px;</div>
<div>margin: 5px;</div>
<div>display: inline-block;</div>
<div>border: 1px solid black;</div>
<div>}</div>
<br /><br />
<div>css</div>
<div>[data-color="red"] {</div>
<div>background-color: color(xyz 45 20 0);</div>
<div>}</div>
<br />
<div>[data-color="green"] {</div>
<div>background-color: color(xyz-d50 0.3 80 0.3);</div>
<div>}</div>
<br />
<div>[data-color="blue"] {</div>
<div>background-color: color(xyz-d65 5 0 50);</div>
<div>}</div>
<br /><br />
<div>#### Result</div>
<br />
<div>{{EmbedLiveSample("using_the_xyz_color_space_with_color")}}</div>
<br />
<div>### Using color-gamut media queries with color()</div>
<br />
<div>This example shows how to use the ['color-gamut'](/en-US/docs/Web/CSS/@media/color-gamut) media query to detect support for a particular color space and use that color space to specify a color.</div>
<br />
<div>#### HTML</div>
<br />
<div>html</div>
<div>&lt;div&gt;&lt;/div&gt;</div>
<div>&lt;div&gt;&lt;/div&gt;</div>
<div>&lt;div&gt;&lt;/div&gt;</div>
<br /><br />
<div>#### CSS</div>
<br />
<div>css hidden</div>
<div>div {</div>
<div>width: 50px;</div>
<div>height: 50px;</div>
<div>padding: 5px;</div>
<div>margin: 5px;</div>
<div>display: inline-block;</div>
<div>border: 1px solid black;</div>
<div>}</div>
<br /><br />
<div>css</div>
<div>@media (color-gamut: p3) {</div>
<div>div {</div>
<div>background-color: color(display-p3 1 0 0);</div>
<div>}</div>
<div>}</div>
<br />
<div>@media (color-gamut: srgb) {</div>
<div>div:nth-child(2) {</div>
<div>background-color: color(srgb 1 0 0);</div>
<div>}</div>
<div>}</div>
<br />
<div>@media (color-gamut: rec2020) {</div>
<div>div:nth-child(3) {</div>
<div>background-color: color(rec2020 1 0 0);</div>
<div>}</div>
<div>}</div>
<br /><br />
<div>#### Result</div>
<br />
<div>{{EmbedLiveSample("using_color-gamut_media_queries_with_color")}}</div>
<br />
<div>### Using relative colors with color()</div>
<br />
<div>This example styles three {{htmlelement("div")}} elements with different background colors. The middle one is given the unmodified '--base-color', while the left and right ones are given lightened and darkened variants of that '--base-color'.</div>
<br />
<div>These variants are defined using relative colors &mdash; the '--base-color' [custom property](/en-US/docs/Web/CSS/--*) is passed into a 'color()' function, and the output colors have their 'g' and 'b' channels modified to achieve the desired effect via 'calc()' functions. The lightened color has 15% added to those channels, and the darkened color has 15% subtracted from those channels.</div>
<br />
<div>html hidden</div>
<div>&lt;div id="container"&gt;</div>
<div>&lt;div class="item" id="one"&gt;&lt;/div&gt;</div>
<div>&lt;div class="item" id="two"&gt;&lt;/div&gt;</div>
<div>&lt;div class="item" id="three"&gt;&lt;/div&gt;</div>
<div>&lt;/div&gt;</div>
<br /><br />
<div>#### CSS</div>
<br />
<div>css hidden</div>
<div>#container {</div>
<div>display: flex;</div>
<div>width: 100vw;</div>
<div>height: 100vh;</div>
<div>box-sizing: border-box;</div>
<div>}</div>
<br />
<div>.item {</div>
<div>flex: 1;</div>
<div>margin: 20px;</div>
<div>}</div>
<br /><br />
<div>css</div>
<div>:root {</div>
<div>--base-color: orange;</div>
<div>}</div>
<br />
<div>#one {</div>
<div>background-color: color(</div>
<div>from var(--base-color) display-p3 r calc(g + 0.15) calc(b + 0.15)</div>
<div>);</div>
<div>}</div>
<br />
<div>#two {</div>
<div>background-color: var(--base-color);</div>
<div>}</div>
<br />
<div>#three {</div>
<div>background-color: color(</div>
<div>from var(--base-color) display-p3 r calc(g - 0.15) calc(b - 0.15)</div>
<div>);</div>
<div>}</div>
<br />
<div>/* Use @supports to add in support old syntax that requires r g b values</div>
<div>to be specified as percentages (with units) in calculations.</div>
<div>This is required for Safari 16.4+ */</div>
<div>@supports (color: color(from red display-p3 r g calc(b + 30%))) {</div>
<div>#one {</div>
<div>background-color: color(</div>
<div>from var(--base-color) display-p3 r calc(g + 15%) calc(b + 15%)</div>
<div>);</div>
<div>}</div>
<br />
<div>#three {</div>
<div>background-color: color(</div>
<div>from var(--base-color) display-p3 r calc(g - 15%) calc(b - 15%)</div>
<div>);</div>
<div>}</div>
<div>}</div>
<br /><br />
<div>#### Result</div>
<br />
<div>The output is as follows:</div>
<br />
<div>{{ EmbedLiveSample("Using relative colors with color()", "100%", "200") }}</div>
<br />
<div>## Specifications</div>
</div>
`,
    },
]
