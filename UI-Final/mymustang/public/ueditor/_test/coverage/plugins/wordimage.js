/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['plugins/wordimage.js']) {
  _$jscoverage['plugins/wordimage.js'] = [];
  _$jscoverage['plugins/wordimage.js'][7] = 0;
  _$jscoverage['plugins/wordimage.js'][8] = 0;
  _$jscoverage['plugins/wordimage.js'][10] = 0;
  _$jscoverage['plugins/wordimage.js'][11] = 0;
  _$jscoverage['plugins/wordimage.js'][12] = 0;
  _$jscoverage['plugins/wordimage.js'][16] = 0;
  _$jscoverage['plugins/wordimage.js'][17] = 0;
  _$jscoverage['plugins/wordimage.js'][53] = 0;
  _$jscoverage['plugins/wordimage.js'][55] = 0;
  _$jscoverage['plugins/wordimage.js'][56] = 0;
  _$jscoverage['plugins/wordimage.js'][57] = 0;
  _$jscoverage['plugins/wordimage.js'][58] = 0;
  _$jscoverage['plugins/wordimage.js'][59] = 0;
  _$jscoverage['plugins/wordimage.js'][61] = 0;
  _$jscoverage['plugins/wordimage.js'][62] = 0;
  _$jscoverage['plugins/wordimage.js'][66] = 0;
  _$jscoverage['plugins/wordimage.js'][67] = 0;
  _$jscoverage['plugins/wordimage.js'][68] = 0;
  _$jscoverage['plugins/wordimage.js'][69] = 0;
  _$jscoverage['plugins/wordimage.js'][72] = 0;
}
_$jscoverage['plugins/wordimage.js'].source = ["<span class=\"c\">/**</span>","<span class=\"c\"> * &#26412;&#22320;&#22270;&#29255;&#24341;&#23548;&#19978;&#20256;&#25554;&#20214;</span>","<span class=\"c\"> * @file</span>","<span class=\"c\"> * @since 1.2.6.1</span>","<span class=\"c\"> */</span>","","UE<span class=\"k\">.</span>plugins<span class=\"k\">[</span><span class=\"s\">\"wordimage\"</span><span class=\"k\">]</span> <span class=\"k\">=</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","    <span class=\"k\">var</span> me <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">,</span>","        images<span class=\"k\">;</span>","    me<span class=\"k\">.</span>addInputRule<span class=\"k\">(</span><span class=\"k\">function</span> <span class=\"k\">(</span>root<span class=\"k\">)</span> <span class=\"k\">{</span>","        utils<span class=\"k\">.</span>each<span class=\"k\">(</span>root<span class=\"k\">.</span>getNodesByTagName<span class=\"k\">(</span><span class=\"s\">'img'</span><span class=\"k\">),</span> <span class=\"k\">function</span> <span class=\"k\">(</span>img<span class=\"k\">)</span> <span class=\"k\">{</span>","            <span class=\"k\">var</span> attrs <span class=\"k\">=</span> img<span class=\"k\">.</span>attrs<span class=\"k\">,</span>","                flag <span class=\"k\">=</span> parseInt<span class=\"k\">(</span>attrs<span class=\"k\">.</span>width<span class=\"k\">)</span> <span class=\"k\">&lt;</span> <span class=\"s\">128</span> <span class=\"k\">||</span> parseInt<span class=\"k\">(</span>attrs<span class=\"k\">.</span>height<span class=\"k\">)</span> <span class=\"k\">&lt;</span> <span class=\"s\">43</span><span class=\"k\">,</span>","                opt <span class=\"k\">=</span> me<span class=\"k\">.</span>options<span class=\"k\">,</span>","                src <span class=\"k\">=</span> opt<span class=\"k\">.</span>UEDITOR_HOME_URL <span class=\"k\">+</span> <span class=\"s\">'themes/default/images/spacer.gif'</span><span class=\"k\">;</span>","            <span class=\"k\">if</span> <span class=\"k\">(</span>attrs<span class=\"k\">[</span><span class=\"s\">'_src'</span><span class=\"k\">]</span> <span class=\"k\">&amp;&amp;</span> attrs<span class=\"k\">[</span><span class=\"s\">'_src'</span><span class=\"k\">].</span>indexOf<span class=\"k\">(</span><span class=\"s\">\"file:///\"</span><span class=\"k\">)!==-</span><span class=\"s\">1</span><span class=\"k\">)</span> <span class=\"k\">{</span>","                img<span class=\"k\">.</span>setAttr<span class=\"k\">(</span><span class=\"k\">{</span>","                    width<span class=\"k\">:</span>attrs<span class=\"k\">.</span>width<span class=\"k\">,</span>","                    height<span class=\"k\">:</span>attrs<span class=\"k\">.</span>height<span class=\"k\">,</span>","                    alt<span class=\"k\">:</span>attrs<span class=\"k\">.</span>alt<span class=\"k\">,</span>","                    word_img<span class=\"k\">:</span>attrs<span class=\"k\">.</span>_src<span class=\"k\">,</span>","                    src<span class=\"k\">:</span>src<span class=\"k\">,</span>","                    _src<span class=\"k\">:</span>src<span class=\"k\">,</span>","                    <span class=\"s\">'style'</span><span class=\"k\">:</span><span class=\"s\">'background:url('</span> <span class=\"k\">+</span> <span class=\"k\">(</span> flag <span class=\"k\">?</span> opt<span class=\"k\">.</span>themePath <span class=\"k\">+</span> opt<span class=\"k\">.</span>theme <span class=\"k\">+</span> <span class=\"s\">'/images/word.gif'</span> <span class=\"k\">:</span> opt<span class=\"k\">.</span>langPath <span class=\"k\">+</span> opt<span class=\"k\">.</span>lang <span class=\"k\">+</span> <span class=\"s\">'/images/localimage.png'</span><span class=\"k\">)</span> <span class=\"k\">+</span> <span class=\"s\">') no-repeat center center;border:1px solid #ddd'</span>","                <span class=\"k\">}</span><span class=\"k\">)</span>","            <span class=\"k\">}</span>","        <span class=\"k\">}</span><span class=\"k\">)</span>","    <span class=\"k\">}</span><span class=\"k\">);</span>","","    <span class=\"c\">/**</span>","<span class=\"c\">     * &#31896;&#36148;word&#25991;&#26723;&#30340;&#20869;&#23481;&#26102;&#65292;&#36816;&#34892;&#35813;&#21629;&#20196;&#65292;&#20250;&#25226;&#32534;&#36753;&#21306;&#22495;&#37324;&#30340;word&#22270;&#29255;&#22320;&#22336;&#65292;&#36171;&#20540;&#21040;editor.word_img&#30340;&#25968;&#32452;&#37324;&#38754;</span>","<span class=\"c\">     * @command wordimage</span>","<span class=\"c\">     * @method execCommand</span>","<span class=\"c\">     * @param { String } cmd &#21629;&#20196;&#23383;&#31526;&#20018;</span>","<span class=\"c\">     * @example</span>","<span class=\"c\">     * ```javascript</span>","<span class=\"c\">     * editor.execCommand( 'wordimage');</span>","<span class=\"c\">     * ```</span>","<span class=\"c\">     */</span>","","    <span class=\"c\">/**</span>","<span class=\"c\">     * &#26597;&#35810;&#24403;&#21069;&#26159;&#21542;&#26377;word&#25991;&#26723;&#31896;&#36148;&#36827;&#26469;&#30340;&#22270;&#29255;</span>","<span class=\"c\">     * @command wordimage</span>","<span class=\"c\">     * @method queryCommandState</span>","<span class=\"c\">     * @param { String } cmd &#21629;&#20196;&#23383;&#31526;&#20018;</span>","<span class=\"c\">     * @return { int } &#22914;&#26524;&#24403;&#21069;&#32534;&#36753;&#21306;&#22495;&#26377;word&#25991;&#26723;&#30340;&#31896;&#36148;&#36827;&#26469;&#30340;&#22270;&#29255;&#65292;&#21017;&#36820;&#22238;1&#65292;&#21542;&#21017;&#36820;&#22238;-1</span>","<span class=\"c\">     * @example</span>","<span class=\"c\">     * ```javascript</span>","<span class=\"c\">     * editor.queryCommandState( 'wordimage' );</span>","<span class=\"c\">     * ```</span>","<span class=\"c\">     */</span>","","    me<span class=\"k\">.</span>commands<span class=\"k\">[</span><span class=\"s\">'wordimage'</span><span class=\"k\">]</span> <span class=\"k\">=</span> <span class=\"k\">{</span>","        execCommand<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","            images <span class=\"k\">=</span> domUtils<span class=\"k\">.</span>getElementsByTagName<span class=\"k\">(</span>me<span class=\"k\">.</span>document<span class=\"k\">.</span>body<span class=\"k\">,</span> <span class=\"s\">\"img\"</span><span class=\"k\">);</span>","            <span class=\"k\">var</span> urlList <span class=\"k\">=</span> <span class=\"k\">[];</span>","            <span class=\"k\">for</span> <span class=\"k\">(</span><span class=\"k\">var</span> i <span class=\"k\">=</span> <span class=\"s\">0</span><span class=\"k\">,</span> ci<span class=\"k\">;</span> ci <span class=\"k\">=</span> images<span class=\"k\">[</span>i<span class=\"k\">++];)</span> <span class=\"k\">{</span>","                <span class=\"k\">var</span> url <span class=\"k\">=</span> ci<span class=\"k\">.</span>getAttribute<span class=\"k\">(</span><span class=\"s\">\"word_img\"</span><span class=\"k\">);</span>","                url <span class=\"k\">&amp;&amp;</span> urlList<span class=\"k\">.</span>push<span class=\"k\">(</span>url<span class=\"k\">);</span>","            <span class=\"k\">}</span>","            <span class=\"k\">if</span> <span class=\"k\">(</span>images<span class=\"k\">.</span>length<span class=\"k\">)</span> <span class=\"k\">{</span>","                <span class=\"k\">this</span><span class=\"k\">[</span><span class=\"s\">\"word_img\"</span><span class=\"k\">]</span> <span class=\"k\">=</span> urlList<span class=\"k\">;</span>","            <span class=\"k\">}</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        queryCommandState<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","            images <span class=\"k\">=</span> domUtils<span class=\"k\">.</span>getElementsByTagName<span class=\"k\">(</span>me<span class=\"k\">.</span>document<span class=\"k\">.</span>body<span class=\"k\">,</span> <span class=\"s\">\"img\"</span><span class=\"k\">);</span>","            <span class=\"k\">for</span> <span class=\"k\">(</span><span class=\"k\">var</span> i <span class=\"k\">=</span> <span class=\"s\">0</span><span class=\"k\">,</span> ci<span class=\"k\">;</span> ci <span class=\"k\">=</span> images<span class=\"k\">[</span>i<span class=\"k\">++];)</span> <span class=\"k\">{</span>","                <span class=\"k\">if</span> <span class=\"k\">(</span>ci<span class=\"k\">.</span>getAttribute<span class=\"k\">(</span><span class=\"s\">\"word_img\"</span><span class=\"k\">))</span> <span class=\"k\">{</span>","                    <span class=\"k\">return</span> <span class=\"s\">1</span><span class=\"k\">;</span>","                <span class=\"k\">}</span>","            <span class=\"k\">}</span>","            <span class=\"k\">return</span> <span class=\"k\">-</span><span class=\"s\">1</span><span class=\"k\">;</span>","        <span class=\"k\">}</span>","    <span class=\"k\">}</span><span class=\"k\">;</span>","","<span class=\"k\">}</span><span class=\"k\">;</span>"];
_$jscoverage['plugins/wordimage.js'][7]++;
UE.plugins.wordimage = (function () {
  _$jscoverage['plugins/wordimage.js'][8]++;
  var me = this, images;
  _$jscoverage['plugins/wordimage.js'][10]++;
  me.addInputRule((function (root) {
  _$jscoverage['plugins/wordimage.js'][11]++;
  utils.each(root.getNodesByTagName("img"), (function (img) {
  _$jscoverage['plugins/wordimage.js'][12]++;
  var attrs = img.attrs, flag = ((parseInt(attrs.width) < 128) || (parseInt(attrs.height) < 43)), opt = me.options, src = (opt.UEDITOR_HOME_URL + "themes/default/images/spacer.gif");
  _$jscoverage['plugins/wordimage.js'][16]++;
  if ((attrs._src && (attrs._src.indexOf("file:///") !== -1))) {
    _$jscoverage['plugins/wordimage.js'][17]++;
    img.setAttr({width: attrs.width, height: attrs.height, alt: attrs.alt, word_img: attrs._src, src: src, _src: src, "style": ("background:url(" + (flag? (opt.themePath + opt.theme + "/images/word.gif"): (opt.langPath + opt.lang + "/images/localimage.png")) + ") no-repeat center center;border:1px solid #ddd")});
  }
}));
}));
  _$jscoverage['plugins/wordimage.js'][53]++;
  me.commands.wordimage = {execCommand: (function () {
  _$jscoverage['plugins/wordimage.js'][55]++;
  images = domUtils.getElementsByTagName(me.document.body, "img");
  _$jscoverage['plugins/wordimage.js'][56]++;
  var urlList = [];
  _$jscoverage['plugins/wordimage.js'][57]++;
  for (var i = 0, ci; (ci = images[(i++)]);) {
    _$jscoverage['plugins/wordimage.js'][58]++;
    var url = ci.getAttribute("word_img");
    _$jscoverage['plugins/wordimage.js'][59]++;
    (url && urlList.push(url));
}
  _$jscoverage['plugins/wordimage.js'][61]++;
  if (images.length) {
    _$jscoverage['plugins/wordimage.js'][62]++;
    this.word_img = urlList;
  }
}), queryCommandState: (function () {
  _$jscoverage['plugins/wordimage.js'][66]++;
  images = domUtils.getElementsByTagName(me.document.body, "img");
  _$jscoverage['plugins/wordimage.js'][67]++;
  for (var i = 0, ci; (ci = images[(i++)]);) {
    _$jscoverage['plugins/wordimage.js'][68]++;
    if (ci.getAttribute("word_img")) {
      _$jscoverage['plugins/wordimage.js'][69]++;
      return 1;
    }
}
  _$jscoverage['plugins/wordimage.js'][72]++;
  return -1;
})};
});