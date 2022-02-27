<wxs module="xs" src="./utils.wxs" />
<template name="taro_tmpl">
  <block qq:for="{{root.cn}}" qq:key="sid">
    <template is="tmpl_0_container" data="{{i:item,l:''}}" />
  </block>
</template>

<template name="tmpl_0_catch-view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" bindtouchstart="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh" catchtouchmove="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_0_static-view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" animation="{{i.animation}}" style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_0_pure-view">
  <view style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_0_view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" bindtouchstart="eh" bindtouchmove="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_0_static-text">
  <text selectable="{{xs.b(i.selectable,false)}}" space="{{i.space}}" decode="{{xs.b(i.decode,false)}}" user-select="{{xs.b(i.userSelect,false)}}" style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </text>
</template>

<template name="tmpl_0_text">
  <text selectable="{{xs.b(i.selectable,false)}}" space="{{i.space}}" decode="{{xs.b(i.decode,false)}}" user-select="{{xs.b(i.userSelect,false)}}" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </text>
</template>

<template name="tmpl_0_button">
  <button size="{{xs.b(i.size,'default')}}" type="{{i.type}}" plain="{{xs.b(i.plain,false)}}" disabled="{{i.disabled}}" loading="{{xs.b(i.loading,false)}}" form-type="{{i.formType}}" open-type="{{i.openType}}" hover-class="{{xs.b(i.hoverClass,'button-hover')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,20)}}" hover-stay-time="{{xs.b(i.hoverStayTime,70)}}" name="{{i.name}}" bindtouchstart="eh" bindtouchmove="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" lang="{{xs.b(i.lang,en)}}" session-from="{{i.sessionFrom}}" send-message-title="{{i.sendMessageTitle}}" send-message-path="{{i.sendMessagePath}}" send-message-img="{{i.sendMessageImg}}" app-parameter="{{i.appParameter}}" show-message-card="{{xs.b(i.showMessageCard,false)}}" business-id="{{i.businessId}}" bindgetuserinfo="eh" bindcontact="eh" bindgetphonenumber="eh" binderror="eh" bindopensetting="eh" bindlaunchapp="eh" app-packagename="{{i.appPackagename}}" app-bundleid="{{i.appBundleid}}" app-connect-id="{{i.appConnectId}}" group-id="{{i.groupId}}" public-id="{{i.publicId}}" share-type="{{xs.b(i.shareType,27)}}" share-mode="{{xs.b(i.shareMode,['qq', 'qzone'])}}" aria-label="{{i.ariaLabel}}" open-id="{{i.openId}}" share-message-friend-info="{{i.shareMessageFriendInfo}}" bindaddfriend="eh" bindaddgroupapp="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </button>
</template>

<template name="tmpl_0_input">
  <template is="{{xs.c(i, 'tmpl_0_')}}" data="{{i:i}}" />
</template>

<template name="tmpl_0_input_focus">
  <input value="{{i.value}}" type="{{xs.b(i.type,'')}}" password="{{xs.b(i.password,false)}}" placeholder="{{i.placeholder}}" placeholder-style="{{i.placeholderStyle}}" placeholder-class="{{xs.b(i.placeholderClass,'input-placeholder')}}" disabled="{{i.disabled}}" maxlength="{{xs.b(i.maxlength,140)}}" cursor-spacing="{{xs.b(i.cursorSpacing,0)}}" focus="{{xs.b(i.focus,false)}}" confirm-type="{{xs.b(i.confirmType,'done')}}" confirm-hold="{{xs.b(i.confirmHold,false)}}" cursor="{{xs.b(i.cursor,i.value.length)}}" selection-start="{{xs.b(i.selectionStart,-1)}}" selection-end="{{xs.b(i.selectionEnd,-1)}}" bindinput="eh" bindfocus="eh" bindblur="eh" bindconfirm="eh" name="{{i.name}}" always-embed="{{xs.b(i.alwaysEmbed,false)}}" adjust-position="{{xs.b(i.adjustPosition,true)}}" hold-keyboard="{{xs.b(i.holdKeyboard,false)}}" bindkeyboardheightchange="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}"></input>
</template>

<template name="tmpl_0_input_blur">
  <input value="{{i.value}}" type="{{xs.b(i.type,'')}}" password="{{xs.b(i.password,false)}}" placeholder="{{i.placeholder}}" placeholder-style="{{i.placeholderStyle}}" placeholder-class="{{xs.b(i.placeholderClass,'input-placeholder')}}" disabled="{{i.disabled}}" maxlength="{{xs.b(i.maxlength,140)}}" cursor-spacing="{{xs.b(i.cursorSpacing,0)}}" confirm-type="{{xs.b(i.confirmType,'done')}}" confirm-hold="{{xs.b(i.confirmHold,false)}}" cursor="{{xs.b(i.cursor,i.value.length)}}" selection-start="{{xs.b(i.selectionStart,-1)}}" selection-end="{{xs.b(i.selectionEnd,-1)}}" bindinput="eh" bindfocus="eh" bindblur="eh" bindconfirm="eh" name="{{i.name}}" always-embed="{{xs.b(i.alwaysEmbed,false)}}" adjust-position="{{xs.b(i.adjustPosition,true)}}" hold-keyboard="{{xs.b(i.holdKeyboard,false)}}" bindkeyboardheightchange="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}"></input>
</template>

<template name="tmpl_0_scroll-view">
  <scroll-view scroll-x="{{xs.b(i.scrollX,false)}}" scroll-y="{{xs.b(i.scrollY,false)}}" upper-threshold="{{xs.b(i.upperThreshold,50)}}" lower-threshold="{{xs.b(i.lowerThreshold,50)}}" scroll-top="{{i.scrollTop}}" scroll-left="{{i.scrollLeft}}" scroll-into-view="{{i.scrollIntoView}}" scroll-with-animation="{{xs.b(i.scrollWithAnimation,false)}}" enable-back-to-top="{{xs.b(i.enableBackToTop,false)}}" bindscrolltoupper="eh" bindscrolltolower="eh" bindscroll="eh" bindtouchstart="eh" bindtouchmove="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" enable-flex="{{xs.b(i.enableFlex,false)}}" scroll-anchoring="{{xs.b(i.scrollAnchoring,false)}}" refresher-enabled="{{xs.b(i.refresherEnabled,false)}}" refresher-threshold="{{xs.b(i.refresherThreshold,45)}}" refresher-default-style="{{xs.b(i.refresherDefaultStyle,'black')}}" refresher-background="{{xs.b(i.refresherBackground,'#FFF')}}" refresher-triggered="{{xs.b(i.refresherTriggered,false)}}" enhanced="{{xs.b(i.enhanced,false)}}" bounces="{{xs.b(i.bounces,true)}}" show-scrollbar="{{xs.b(i.showScrollbar,true)}}" paging-enabled="{{xs.b(i.pagingEnabled,false)}}" fast-deceleration="{{xs.b(i.fastDeceleration,false)}}" binddragstart="eh" binddragging="eh" binddragend="eh" bindrefresherpulling="eh" bindrefresherrefresh="eh" bindrefresherrestore="eh" bindrefresherabort="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </scroll-view>
</template>

<template name="tmpl_0_static-image">
  <image src="{{i.src}}" mode="{{xs.b(i.mode,'scaleToFill')}}" lazy-load="{{xs.b(i.lazyLoad,false)}}" webp="{{xs.b(i.webp,false)}}" show-menu-by-longpress="{{xs.b(i.showMenuByLongpress,false)}}" style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </image>
</template>

<template name="tmpl_0_image">
  <image src="{{i.src}}" mode="{{xs.b(i.mode,'scaleToFill')}}" lazy-load="{{xs.b(i.lazyLoad,false)}}" binderror="eh" bindload="eh" bindtouchstart="eh" bindtouchmove="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" webp="{{xs.b(i.webp,false)}}" show-menu-by-longpress="{{xs.b(i.showMenuByLongpress,false)}}" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </image>
</template>

<template name="tmpl_0_#text">
  <block>{{i.v}}</block>
</template>

<template name="tmpl_0_container">
  <template is="{{xs.a(0, i.nn, l)}}" data="{{i:i,cid:0,l:xs.f(l,i.nn)}}" />
</template>

<template name="tmpl_1_catch-view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" bindtouchstart="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh" catchtouchmove="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_1_static-view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" animation="{{i.animation}}" style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_1_pure-view">
  <view style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_1_view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" bindtouchstart="eh" bindtouchmove="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_1_static-text">
  <text selectable="{{xs.b(i.selectable,false)}}" space="{{i.space}}" decode="{{xs.b(i.decode,false)}}" user-select="{{xs.b(i.userSelect,false)}}" style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </text>
</template>

<template name="tmpl_1_text">
  <text selectable="{{xs.b(i.selectable,false)}}" space="{{i.space}}" decode="{{xs.b(i.decode,false)}}" user-select="{{xs.b(i.userSelect,false)}}" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </text>
</template>

<template name="tmpl_1_scroll-view">
  <scroll-view scroll-x="{{xs.b(i.scrollX,false)}}" scroll-y="{{xs.b(i.scrollY,false)}}" upper-threshold="{{xs.b(i.upperThreshold,50)}}" lower-threshold="{{xs.b(i.lowerThreshold,50)}}" scroll-top="{{i.scrollTop}}" scroll-left="{{i.scrollLeft}}" scroll-into-view="{{i.scrollIntoView}}" scroll-with-animation="{{xs.b(i.scrollWithAnimation,false)}}" enable-back-to-top="{{xs.b(i.enableBackToTop,false)}}" bindscrolltoupper="eh" bindscrolltolower="eh" bindscroll="eh" bindtouchstart="eh" bindtouchmove="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" enable-flex="{{xs.b(i.enableFlex,false)}}" scroll-anchoring="{{xs.b(i.scrollAnchoring,false)}}" refresher-enabled="{{xs.b(i.refresherEnabled,false)}}" refresher-threshold="{{xs.b(i.refresherThreshold,45)}}" refresher-default-style="{{xs.b(i.refresherDefaultStyle,'black')}}" refresher-background="{{xs.b(i.refresherBackground,'#FFF')}}" refresher-triggered="{{xs.b(i.refresherTriggered,false)}}" enhanced="{{xs.b(i.enhanced,false)}}" bounces="{{xs.b(i.bounces,true)}}" show-scrollbar="{{xs.b(i.showScrollbar,true)}}" paging-enabled="{{xs.b(i.pagingEnabled,false)}}" fast-deceleration="{{xs.b(i.fastDeceleration,false)}}" binddragstart="eh" binddragging="eh" binddragend="eh" bindrefresherpulling="eh" bindrefresherrefresh="eh" bindrefresherrestore="eh" bindrefresherabort="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </scroll-view>
</template>

<template name="tmpl_1_container">
  <template is="{{xs.a(1, i.nn, l)}}" data="{{i:i,cid:1,l:xs.f(l,i.nn)}}" />
</template>

<template name="tmpl_2_catch-view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" bindtouchstart="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh" catchtouchmove="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_2_static-view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" animation="{{i.animation}}" style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_2_pure-view">
  <view style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_2_view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" bindtouchstart="eh" bindtouchmove="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_2_static-text">
  <text selectable="{{xs.b(i.selectable,false)}}" space="{{i.space}}" decode="{{xs.b(i.decode,false)}}" user-select="{{xs.b(i.userSelect,false)}}" style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </text>
</template>

<template name="tmpl_2_text">
  <text selectable="{{xs.b(i.selectable,false)}}" space="{{i.space}}" decode="{{xs.b(i.decode,false)}}" user-select="{{xs.b(i.userSelect,false)}}" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </text>
</template>

<template name="tmpl_2_scroll-view">
  <scroll-view scroll-x="{{xs.b(i.scrollX,false)}}" scroll-y="{{xs.b(i.scrollY,false)}}" upper-threshold="{{xs.b(i.upperThreshold,50)}}" lower-threshold="{{xs.b(i.lowerThreshold,50)}}" scroll-top="{{i.scrollTop}}" scroll-left="{{i.scrollLeft}}" scroll-into-view="{{i.scrollIntoView}}" scroll-with-animation="{{xs.b(i.scrollWithAnimation,false)}}" enable-back-to-top="{{xs.b(i.enableBackToTop,false)}}" bindscrolltoupper="eh" bindscrolltolower="eh" bindscroll="eh" bindtouchstart="eh" bindtouchmove="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" enable-flex="{{xs.b(i.enableFlex,false)}}" scroll-anchoring="{{xs.b(i.scrollAnchoring,false)}}" refresher-enabled="{{xs.b(i.refresherEnabled,false)}}" refresher-threshold="{{xs.b(i.refresherThreshold,45)}}" refresher-default-style="{{xs.b(i.refresherDefaultStyle,'black')}}" refresher-background="{{xs.b(i.refresherBackground,'#FFF')}}" refresher-triggered="{{xs.b(i.refresherTriggered,false)}}" enhanced="{{xs.b(i.enhanced,false)}}" bounces="{{xs.b(i.bounces,true)}}" show-scrollbar="{{xs.b(i.showScrollbar,true)}}" paging-enabled="{{xs.b(i.pagingEnabled,false)}}" fast-deceleration="{{xs.b(i.fastDeceleration,false)}}" binddragstart="eh" binddragging="eh" binddragend="eh" bindrefresherpulling="eh" bindrefresherrefresh="eh" bindrefresherrestore="eh" bindrefresherabort="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </scroll-view>
</template>

<template name="tmpl_2_container">
  <template is="{{xs.a(2, i.nn, l)}}" data="{{i:i,cid:2,l:xs.f(l,i.nn)}}" />
</template>

<template name="tmpl_3_catch-view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" bindtouchstart="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh" catchtouchmove="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_3_static-view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" animation="{{i.animation}}" style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_3_pure-view">
  <view style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_3_view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" bindtouchstart="eh" bindtouchmove="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_3_static-text">
  <text selectable="{{xs.b(i.selectable,false)}}" space="{{i.space}}" decode="{{xs.b(i.decode,false)}}" user-select="{{xs.b(i.userSelect,false)}}" style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </text>
</template>

<template name="tmpl_3_text">
  <text selectable="{{xs.b(i.selectable,false)}}" space="{{i.space}}" decode="{{xs.b(i.decode,false)}}" user-select="{{xs.b(i.userSelect,false)}}" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </text>
</template>

<template name="tmpl_3_scroll-view">
  <scroll-view scroll-x="{{xs.b(i.scrollX,false)}}" scroll-y="{{xs.b(i.scrollY,false)}}" upper-threshold="{{xs.b(i.upperThreshold,50)}}" lower-threshold="{{xs.b(i.lowerThreshold,50)}}" scroll-top="{{i.scrollTop}}" scroll-left="{{i.scrollLeft}}" scroll-into-view="{{i.scrollIntoView}}" scroll-with-animation="{{xs.b(i.scrollWithAnimation,false)}}" enable-back-to-top="{{xs.b(i.enableBackToTop,false)}}" bindscrolltoupper="eh" bindscrolltolower="eh" bindscroll="eh" bindtouchstart="eh" bindtouchmove="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" enable-flex="{{xs.b(i.enableFlex,false)}}" scroll-anchoring="{{xs.b(i.scrollAnchoring,false)}}" refresher-enabled="{{xs.b(i.refresherEnabled,false)}}" refresher-threshold="{{xs.b(i.refresherThreshold,45)}}" refresher-default-style="{{xs.b(i.refresherDefaultStyle,'black')}}" refresher-background="{{xs.b(i.refresherBackground,'#FFF')}}" refresher-triggered="{{xs.b(i.refresherTriggered,false)}}" enhanced="{{xs.b(i.enhanced,false)}}" bounces="{{xs.b(i.bounces,true)}}" show-scrollbar="{{xs.b(i.showScrollbar,true)}}" paging-enabled="{{xs.b(i.pagingEnabled,false)}}" fast-deceleration="{{xs.b(i.fastDeceleration,false)}}" binddragstart="eh" binddragging="eh" binddragend="eh" bindrefresherpulling="eh" bindrefresherrefresh="eh" bindrefresherrestore="eh" bindrefresherabort="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </scroll-view>
</template>

<template name="tmpl_3_container">
  <template is="{{xs.a(3, i.nn, l)}}" data="{{i:i,cid:3,l:xs.f(l,i.nn)}}" />
</template>

<template name="tmpl_4_catch-view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" bindtouchstart="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh" catchtouchmove="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_4_static-view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" animation="{{i.animation}}" style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_4_pure-view">
  <view style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_4_view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" bindtouchstart="eh" bindtouchmove="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_4_static-text">
  <text selectable="{{xs.b(i.selectable,false)}}" space="{{i.space}}" decode="{{xs.b(i.decode,false)}}" user-select="{{xs.b(i.userSelect,false)}}" style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </text>
</template>

<template name="tmpl_4_text">
  <text selectable="{{xs.b(i.selectable,false)}}" space="{{i.space}}" decode="{{xs.b(i.decode,false)}}" user-select="{{xs.b(i.userSelect,false)}}" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </text>
</template>

<template name="tmpl_4_container">
  <template is="{{xs.a(4, i.nn, l)}}" data="{{i:i,cid:4,l:xs.f(l,i.nn)}}" />
</template>

<template name="tmpl_5_catch-view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" bindtouchstart="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh" catchtouchmove="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_5_static-view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" animation="{{i.animation}}" style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_5_pure-view">
  <view style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_5_view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" bindtouchstart="eh" bindtouchmove="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_5_static-text">
  <text selectable="{{xs.b(i.selectable,false)}}" space="{{i.space}}" decode="{{xs.b(i.decode,false)}}" user-select="{{xs.b(i.userSelect,false)}}" style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </text>
</template>

<template name="tmpl_5_text">
  <text selectable="{{xs.b(i.selectable,false)}}" space="{{i.space}}" decode="{{xs.b(i.decode,false)}}" user-select="{{xs.b(i.userSelect,false)}}" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </text>
</template>

<template name="tmpl_5_container">
  <template is="{{xs.a(5, i.nn, l)}}" data="{{i:i,cid:5,l:xs.f(l,i.nn)}}" />
</template>

<template name="tmpl_6_catch-view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" bindtouchstart="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh" catchtouchmove="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_6_static-view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" animation="{{i.animation}}" style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_6_pure-view">
  <view style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_6_view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" bindtouchstart="eh" bindtouchmove="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_6_text">
  <text selectable="{{xs.b(i.selectable,false)}}" space="{{i.space}}" decode="{{xs.b(i.decode,false)}}" user-select="{{xs.b(i.userSelect,false)}}" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </text>
</template>

<template name="tmpl_6_container">
  <template is="{{xs.a(6, i.nn, l)}}" data="{{i:i,cid:6,l:xs.f(l,i.nn)}}" />
</template>

<template name="tmpl_7_catch-view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" bindtouchstart="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh" catchtouchmove="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_7_static-view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" animation="{{i.animation}}" style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_7_pure-view">
  <view style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_7_view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" bindtouchstart="eh" bindtouchmove="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_7_text">
  <text selectable="{{xs.b(i.selectable,false)}}" space="{{i.space}}" decode="{{xs.b(i.decode,false)}}" user-select="{{xs.b(i.userSelect,false)}}" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </text>
</template>

<template name="tmpl_7_container">
  <template is="{{xs.a(7, i.nn, l)}}" data="{{i:i,cid:7,l:xs.f(l,i.nn)}}" />
</template>

<template name="tmpl_8_catch-view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" bindtouchstart="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh" catchtouchmove="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_8_static-view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" animation="{{i.animation}}" style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_8_pure-view">
  <view style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_8_view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" bindtouchstart="eh" bindtouchmove="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_8_text">
  <text selectable="{{xs.b(i.selectable,false)}}" space="{{i.space}}" decode="{{xs.b(i.decode,false)}}" user-select="{{xs.b(i.userSelect,false)}}" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </text>
</template>

<template name="tmpl_8_container">
  <template is="{{xs.a(8, i.nn, l)}}" data="{{i:i,cid:8,l:xs.f(l,i.nn)}}" />
</template>

<template name="tmpl_9_catch-view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" bindtouchstart="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh" catchtouchmove="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_9_static-view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" animation="{{i.animation}}" style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_9_pure-view">
  <view style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_9_view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" bindtouchstart="eh" bindtouchmove="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_9_text">
  <text selectable="{{xs.b(i.selectable,false)}}" space="{{i.space}}" decode="{{xs.b(i.decode,false)}}" user-select="{{xs.b(i.userSelect,false)}}" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </text>
</template>

<template name="tmpl_9_container">
  <template is="{{xs.a(9, i.nn, l)}}" data="{{i:i,cid:9,l:xs.f(l,i.nn)}}" />
</template>

<template name="tmpl_10_catch-view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" bindtouchstart="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh" catchtouchmove="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_10_static-view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" animation="{{i.animation}}" style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_10_pure-view">
  <view style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_10_view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" bindtouchstart="eh" bindtouchmove="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_10_text">
  <text selectable="{{xs.b(i.selectable,false)}}" space="{{i.space}}" decode="{{xs.b(i.decode,false)}}" user-select="{{xs.b(i.userSelect,false)}}" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </text>
</template>

<template name="tmpl_10_container">
  <template is="{{xs.a(10, i.nn, l)}}" data="{{i:i,cid:10,l:xs.f(l,i.nn)}}" />
</template>

<template name="tmpl_11_catch-view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" bindtouchstart="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh" catchtouchmove="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_11_static-view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" animation="{{i.animation}}" style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_11_pure-view">
  <view style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_11_view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" bindtouchstart="eh" bindtouchmove="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_11_text">
  <text selectable="{{xs.b(i.selectable,false)}}" space="{{i.space}}" decode="{{xs.b(i.decode,false)}}" user-select="{{xs.b(i.userSelect,false)}}" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </text>
</template>

<template name="tmpl_11_container">
  <template is="{{xs.a(11, i.nn, l)}}" data="{{i:i,cid:11,l:xs.f(l,i.nn)}}" />
</template>

<template name="tmpl_12_catch-view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" bindtouchstart="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh" catchtouchmove="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_12_static-view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" animation="{{i.animation}}" style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_12_pure-view">
  <view style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_12_view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" bindtouchstart="eh" bindtouchmove="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_12_text">
  <text selectable="{{xs.b(i.selectable,false)}}" space="{{i.space}}" decode="{{xs.b(i.decode,false)}}" user-select="{{xs.b(i.userSelect,false)}}" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </text>
</template>

<template name="tmpl_12_container">
  <template is="{{xs.a(12, i.nn, l)}}" data="{{i:i,cid:12,l:xs.f(l,i.nn)}}" />
</template>

<template name="tmpl_13_catch-view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" bindtouchstart="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh" catchtouchmove="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_13_static-view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" animation="{{i.animation}}" style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_13_pure-view">
  <view style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_13_view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" bindtouchstart="eh" bindtouchmove="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_13_text">
  <text selectable="{{xs.b(i.selectable,false)}}" space="{{i.space}}" decode="{{xs.b(i.decode,false)}}" user-select="{{xs.b(i.userSelect,false)}}" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </text>
</template>

<template name="tmpl_13_container">
  <template is="{{xs.a(13, i.nn, l)}}" data="{{i:i,cid:13,l:xs.f(l,i.nn)}}" />
</template>

<template name="tmpl_14_catch-view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" bindtouchstart="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh" catchtouchmove="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_14_static-view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" animation="{{i.animation}}" style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_14_pure-view">
  <view style="{{i.st}}" class="{{i.cl}}"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_14_view">
  <view hover-class="{{xs.b(i.hoverClass,'none')}}" hover-stop-propagation="{{xs.b(i.hoverStopPropagation,false)}}" hover-start-time="{{xs.b(i.hoverStartTime,50)}}" hover-stay-time="{{xs.b(i.hoverStayTime,400)}}" bindtouchstart="eh" bindtouchmove="eh" bindtouchend="eh" bindtouchcancel="eh" bindlongpress="eh" animation="{{i.animation}}" bindanimationstart="eh" bindanimationiteration="eh" bindanimationend="eh" bindtransitionend="eh" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </view>
</template>

<template name="tmpl_14_text">
  <text selectable="{{xs.b(i.selectable,false)}}" space="{{i.space}}" decode="{{xs.b(i.decode,false)}}" user-select="{{xs.b(i.userSelect,false)}}" style="{{i.st}}" class="{{i.cl}}" bindtap="eh"  id="{{i.uid||i.sid}}" data-sid="{{i.sid}}">
    <block qq:for="{{i.cn}}" qq:key="sid">
      <template is="{{xs.e(cid+1)}}" data="{{i:item,l:l}}" />
    </block>
  </text>
</template>

<template name="tmpl_14_container">
  <template is="{{xs.a(14, i.nn, l)}}" data="{{i:i,cid:14,l:xs.f(l,i.nn)}}" />
</template>

<template name="tmpl_15_container">
  <block qq:if="{{i.nn === '#text'}}">
    <template is="tmpl_0_#text" data="{{i:i}}" />
  </block>
  <block qq:else>
    <comp i="{{i}}" l="{{l}}" />
  </block>
</template>