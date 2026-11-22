<template>
  <div class="trace">
    <div class="trace-title">Java · Loop trace</div>
    <pre><code><span class="code-key">int</span> total = <span class="code-num">0</span>;
<span class="code-key">for</span> (<span class="code-key">int</span> n = <span class="code-num">1</span>; n &lt;= <span class="code-num">3</span>; n++) {
    total += n;
}
System.out.println(total);</code></pre>
  </div>
</template>
<script>
export default { name: 'JavaTrace' }
</script>
