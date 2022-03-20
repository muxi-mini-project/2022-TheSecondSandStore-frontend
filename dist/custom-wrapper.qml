<import src="./base.qml" />
  <block qq:for="{{i.cn}}" qq:key="sid">
    <template is="tmpl_0_container" data="{{i:item,l:''}}" />
  </block>