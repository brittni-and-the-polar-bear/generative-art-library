<style>
  div.color-block {
    text-align: center;
  }

  .color-block {
    width: 100%;
    margin: 0;
    padding: 0.5em;
  }

  .black-pass {
    color: black;
  }

  .white-pass {
    color: white;
  }
</style>

# Black Colors Collection Test

{%- assign page_category = "black" -%}

{% for color in site.palette_colors %}
  {%- if color.color_category == page_category -%}
    {%- assign lowercase_hex = color.hex | downcase -%}
    <div class="color-block" style="background: #{{ color.hex }};">
      <a href="https://coolors.co/{{ lowercase_hex }}" target="_blank" rel="noopener noreferrer">
        <h2 class="color-block {{ color.contrast }}">{{ color.name }} (#{{ color.hex }})</h2>
      </a>
    </div>
    <br/>
    <a href="{{ color.url }}">Link</a>
  {%- endif -%}
{% endfor %}
