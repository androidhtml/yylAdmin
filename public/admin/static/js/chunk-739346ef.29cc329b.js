(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-739346ef"],{b9d1:function(e,t,a){"use strict";a.d(t,"a",(function(){return F}));var r=a("e936"),n=a("835f"),i=a("5892"),o=a("306e"),s=2*Math.PI,l=Math.PI/180;function c(e,t){return i["d"](e.getBoxLayoutParams(),{width:t.getWidth(),height:t.getHeight()})}function u(e,t,a){t.eachSeriesByType(e,(function(e){var t=e.getData(),r=t.mapDimension("value"),i=c(e,a),u=e.get("center"),h=e.get("radius");o["r"](h)||(h=[0,h]),o["r"](u)||(u=[u,u]);var d=Object(n["m"])(i.width,a.getWidth()),g=Object(n["m"])(i.height,a.getHeight()),p=Math.min(d,g),f=Object(n["m"])(u[0],d)+i.x,b=Object(n["m"])(u[1],g)+i.y,m=Object(n["m"])(h[0],p/2),y=Object(n["m"])(h[1],p/2),v=-e.get("startAngle")*l,x=e.get("minAngle")*l,O=0;t.each(r,(function(e){!isNaN(e)&&O++}));var _=t.getSum(r),A=Math.PI/(_||O)*2,w=e.get("clockwise"),S=e.get("roseType"),I=e.get("stillShowZeroSum"),L=t.getDataExtent(r);L[0]=0;var M=s,D=0,j=v,P=w?1:-1;if(t.setLayout({viewRect:i,r:y}),t.each(r,(function(e,a){var r;if(isNaN(e))t.setItemLayout(a,{angle:NaN,startAngle:NaN,endAngle:NaN,clockwise:w,cx:f,cy:b,r0:m,r:S?NaN:y});else{r="area"!==S?0===_&&I?A:e*A:s/O,r<x?(r=x,M-=x):D+=e;var i=j+P*r;t.setItemLayout(a,{angle:r,startAngle:j,endAngle:i,clockwise:w,cx:f,cy:b,r0:m,r:S?Object(n["i"])(e,L,[m,y]):y}),j=i}})),M<s&&O)if(M<=.001){var T=s/O;t.each(r,(function(e,a){if(!isNaN(e)){var r=t.getItemLayout(a);r.angle=T,r.startAngle=v+P*a*T,r.endAngle=v+P*(a+1)*T}}))}else A=M/D,j=v,t.each(r,(function(e,a){if(!isNaN(e)){var r=t.getItemLayout(a),n=r.angle===x?x:e*A;r.startAngle=j,r.endAngle=j+P*n,j+=P*n}}))}))}function h(e){return{seriesType:e,reset:function(e,t){var a=t.findComponents({mainType:"legend"});if(a&&a.length){var r=e.getData();r.filterSelf((function(e){for(var t=r.getName(e),n=0;n<a.length;n++)if(!a[n].isSelected(t))return!1;return!0}))}}}}var d=a("cdbd"),g=a("5d70"),p=a("2196"),f=a("3aba"),b=a("9945"),m=a("48b8"),y=a("7a9c"),v=a("5e039"),x=a("cd0f"),O=a("10f0"),_=a("62a2"),A=Math.PI/180;function w(e,t,a,r,n,i,o,s,l,c){if(!(e.length<2)){for(var u=e.length,h=0;h<u;h++)if("outer"===e[h].position&&"labelLine"===e[h].labelAlignTo){var d=e[h].label.x-c;e[h].linePoints[1][0]+=d,e[h].label.x=c}Object(_["d"])(e,l,l+o)&&p(e)}function g(e){for(var i=e.rB,o=i*i,s=0;s<e.list.length;s++){var l=e.list[s],c=Math.abs(l.label.y-a),u=r+l.len,h=u*u,d=Math.sqrt((1-Math.abs(c*c/o))*h);l.label.x=t+(d+l.len2)*n}}function p(e){for(var i={list:[],maxY:0},o={list:[],maxY:0},s=0;s<e.length;s++)if("none"===e[s].labelAlignTo){var l=e[s],c=l.label.y>a?o:i,u=Math.abs(l.label.y-a);if(u>c.maxY){var h=l.label.x-t-l.len2*n,d=r+l.len,p=Math.abs(h)<d?Math.sqrt(u*u/(1-h*h/d/d)):d;c.rB=p,c.maxY=u}c.list.push(l)}g(i),g(o)}}function S(e,t,a,r,n,i,o,s){for(var l=[],c=[],u=Number.MAX_VALUE,h=-Number.MAX_VALUE,d=0;d<e.length;d++){var g=e[d].label;I(e[d])||(g.x<t?(u=Math.min(u,g.x),l.push(e[d])):(h=Math.max(h,g.x),c.push(e[d])))}w(c,t,a,r,1,n,i,o,s,h),w(l,t,a,r,-1,n,i,o,s,u);for(d=0;d<e.length;d++){var p=e[d];g=p.label;if(!I(p)){var f=p.linePoints;if(f){var b="edge"===p.labelAlignTo,m=p.rect.width,y=void 0;y=b?g.x<t?f[2][0]-p.labelDistance-o-p.edgeDistance:o+n-p.edgeDistance-f[2][0]-p.labelDistance:g.x<t?g.x-o-p.bleedMargin:o+n-g.x-p.bleedMargin,y<p.rect.width&&(p.label.style.width=y,"edge"===p.labelAlignTo&&(m=y));var v=f[1][0]-f[2][0];b?g.x<t?f[2][0]=o+p.edgeDistance+m+p.labelDistance:f[2][0]=o+n-p.edgeDistance-m-p.labelDistance:(g.x<t?f[2][0]=g.x+p.labelDistance:f[2][0]=g.x-p.labelDistance,f[1][0]=f[2][0]+v),f[1][1]=f[2][1]=g.y}}}}function I(e){return"center"===e.position}function L(e){var t,a,r=e.getData(),i=[],s=!1,l=(e.get("minShowLabelAngle")||0)*A,c=r.getLayout("viewRect"),u=r.getLayout("r"),h=c.width,d=c.x,g=c.y,p=c.height;function f(e){e.ignore=!0}function b(e){if(!e.ignore)return!0;for(var t in e.states)if(!1===e.states[t].ignore)return!0;return!1}r.each((function(e){var c=r.getItemGraphicEl(e),g=c.shape,p=c.getTextContent(),m=c.getTextGuideLine(),y=r.getItemModel(e),v=y.getModel("label"),O=v.get("position")||y.get(["emphasis","label","position"]),_=v.get("distanceToLabelLine"),A=v.get("alignTo"),w=Object(n["m"])(v.get("edgeDistance"),h),S=v.get("bleedMargin"),I=y.getModel("labelLine"),L=I.get("length");L=Object(n["m"])(L,h);var M=I.get("length2");if(M=Object(n["m"])(M,h),Math.abs(g.endAngle-g.startAngle)<l)return Object(o["j"])(p.states,f),void(p.ignore=!0);if(b(p)){var D,j,P,T,N=(g.startAngle+g.endAngle)/2,R=Math.cos(N),k=Math.sin(N);t=g.cx,a=g.cy;var C,E="inside"===O||"inner"===O;if("center"===O)D=g.cx,j=g.cy,T="center";else{var V=(E?(g.r+g.r0)/2*R:g.r*R)+t,W=(E?(g.r+g.r0)/2*k:g.r*k)+a;if(D=V+3*R,j=W+3*k,!E){var G=V+R*(L+u-g.r),B=W+k*(L+u-g.r),z=G+(R<0?-1:1)*M,U=B;D="edge"===A?R<0?d+w:d+h-w:z+(R<0?-_:_),j=U,P=[[V,W],[G,B],[z,U]]}T=E?"center":"edge"===A?R>0?"right":"left":R>0?"left":"right"}var F=v.get("rotate");if(C="number"===typeof F?F*(Math.PI/180):F?R<0?-N+Math.PI:-N:0,s=!!C,p.x=D,p.y=j,p.rotation=C,p.setStyle({verticalAlign:"middle"}),E){p.setStyle({align:T});var Y=p.states.select;Y&&(Y.x+=p.x,Y.y+=p.y)}else{var H=p.getBoundingRect().clone();H.applyTransform(p.getComputedTransform());var X=(p.style.margin||0)+2.1;H.y-=X/2,H.height+=X,i.push({label:p,labelLine:m,position:O,len:L,len2:M,minTurnAngle:I.get("minTurnAngle"),maxSurfaceAngle:I.get("maxSurfaceAngle"),surfaceNormal:new x["a"](R,k),linePoints:P,textAlign:T,labelDistance:_,labelAlignTo:A,edgeDistance:w,bleedMargin:S,rect:H})}c.setTextConfig({inside:E})}})),!s&&e.get("avoidLabelOverlap")&&S(i,t,a,u,h,p,d,g);for(var m=0;m<i.length;m++){var y=i[m],v=y.label,_=y.labelLine,w=isNaN(v.x)||isNaN(v.y);if(v){v.setStyle({align:y.textAlign}),w&&(Object(o["j"])(v.states,f),v.ignore=!0);var I=v.states.select;I&&(I.x+=v.x,I.y+=v.y)}if(_){var L=y.linePoints;w||!L?(Object(o["j"])(_.states,f),_.ignore=!0):(Object(O["c"])(L,y.minTurnAngle),Object(O["b"])(L,y.surfaceNormal,y.maxSurfaceAngle),_.setShape({points:L}),v.__hostTarget.textGuideLineConfig={anchor:new x["a"](L[0][0],L[0][1])})}}}var M=a("0437"),D=a("bbde");function j(e,t){var a=e.get("borderRadius");return null==a?null:(Object(o["r"])(a)||(a=[a,a]),{innerCornerRadius:Object(D["h"])(a[0],t.r0),cornerRadius:Object(D["h"])(a[1],t.r)})}var P=function(e){function t(t,a,r){var n=e.call(this)||this;n.z2=2;var i=new g["a"];return n.setTextContent(i),n.updateData(t,a,r,!0),n}return Object(d["b"])(t,e),t.prototype.updateData=function(e,t,a,r){var n=this,i=e.hostModel,s=e.getItemModel(t),l=s.getModel("emphasis"),c=e.getItemLayout(t),u=Object(o["l"])(j(s.getModel("itemStyle"),c)||{},c);if(isNaN(u.startAngle))n.setShape(u);else{if(r){n.setShape(u);var h=i.getShallow("animationType");"scale"===h?(n.shape.r=c.r0,p["initProps"](n,{shape:{r:c.r}},i,t)):null!=a?(n.setShape({startAngle:a,endAngle:a}),p["initProps"](n,{shape:{startAngle:c.startAngle,endAngle:c.endAngle}},i,t)):(n.shape.endAngle=c.startAngle,p["updateProps"](n,{shape:{endAngle:c.endAngle}},i,t))}else p["updateProps"](n,{shape:u},i,t);n.useStyle(e.getItemVisual(t,"style")),Object(y["D"])(n,s);var g=(c.startAngle+c.endAngle)/2,f=i.get("selectedOffset"),b=Math.cos(g)*f,m=Math.sin(g)*f,v=s.getShallow("cursor");v&&n.attr("cursor",v),this._updateLabel(i,e,t),n.ensureState("emphasis").shape=Object(d["a"])({r:c.r+(l.get("scale")&&l.get("scaleSize")||0)},j(l.getModel("itemStyle"),c)),Object(o["l"])(n.ensureState("select"),{x:b,y:m,shape:j(s.getModel(["select","itemStyle"]),c)}),Object(o["l"])(n.ensureState("blur"),{shape:j(s.getModel(["blur","itemStyle"]),c)});var x=n.getTextGuideLine(),O=n.getTextContent();x&&Object(o["l"])(x.ensureState("select"),{x:b,y:m}),Object(o["l"])(O.ensureState("select"),{x:b,y:m}),Object(y["m"])(this,l.get("focus"),l.get("blurScope"))}},t.prototype._updateLabel=function(e,t,a){var r=this,n=t.getItemModel(a),i=n.getModel("labelLine"),s=t.getItemVisual(a,"style"),l=s&&s.fill,c=s&&s.opacity;Object(M["f"])(r,Object(M["d"])(n),{labelFetcher:t.hostModel,labelDataIndex:a,inheritColor:l,defaultOpacity:c,defaultText:e.getFormattedLabel(a,"normal")||t.getName(a)});var u=r.getTextContent();r.setTextConfig({position:null,rotation:null}),u.attr({z2:10});var h=e.get(["label","position"]);if("outside"!==h&&"outer"!==h)r.removeTextGuideLine();else{var d=this.getTextGuideLine();d||(d=new f["a"],this.setTextGuideLine(d)),Object(O["d"])(this,Object(O["a"])(n),{stroke:l,opacity:Object(o["M"])(i.get(["lineStyle","opacity"]),c,1)})}},t}(b["a"]),T=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.ignoreLabelLineUpdate=!0,t}return Object(d["b"])(t,e),t.prototype.init=function(){var e=new m["a"];this._sectorGroup=e},t.prototype.render=function(e,t,a,r){var n,i=e.getData(),o=this._data,s=this.group;if(!o&&i.count()>0){for(var l=i.getItemLayout(0),c=1;isNaN(l&&l.startAngle)&&c<i.count();++c)l=i.getItemLayout(c);l&&(n=l.startAngle)}i.diff(o).add((function(e){var t=new P(i,e,n);i.setItemGraphicEl(e,t),s.add(t)})).update((function(e,t){var a=o.getItemGraphicEl(t);a.updateData(i,e,n),a.off("click"),s.add(a),i.setItemGraphicEl(e,a)})).remove((function(t){var a=o.getItemGraphicEl(t);p["removeElementWithFadeOut"](a,e,t)})).execute(),L(e),"expansion"!==e.get("animationTypeUpdate")&&(this._data=i)},t.prototype.dispose=function(){},t.prototype.containPoint=function(e,t){var a=t.getData(),r=a.getItemLayout(0);if(r){var n=e[0]-r.cx,i=e[1]-r.cy,o=Math.sqrt(n*n+i*i);return o<=r.r&&o>=r.r0}},t.type="pie",t}(v["a"]),N=T,R=a("2ca2"),k=a("b116");function C(e,t,a){t=Object(o["r"])(t)&&{coordDimensions:t}||Object(o["l"])({},t);var r=e.getSource(),n=Object(R["a"])(r,t),i=new k["a"](n,e);return i.initData(r,a),i}var E=a("d940"),V=a("a0e7"),W=function(){function e(e,t){this._getDataWithEncodedVisual=e,this._getRawData=t}return e.prototype.getAllNames=function(){var e=this._getRawData();return e.mapArray(e.getName)},e.prototype.containName=function(e){var t=this._getRawData();return t.indexOfName(e)>=0},e.prototype.indexOfName=function(e){var t=this._getDataWithEncodedVisual();return t.indexOfName(e)},e.prototype.getItemVisual=function(e,t){var a=this._getDataWithEncodedVisual();return a.getItemVisual(e,t)},e}(),G=W,B=a("ff42"),z=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.useColorPaletteOnData=!0,t}return Object(d["b"])(t,e),t.prototype.init=function(t){e.prototype.init.apply(this,arguments),this.legendVisualProvider=new G(o["c"](this.getData,this),o["c"](this.getRawData,this)),this._defaultLabelLine(t)},t.prototype.mergeOption=function(){e.prototype.mergeOption.apply(this,arguments)},t.prototype.getInitialData=function(){return C(this,{coordDimensions:["value"],encodeDefaulter:o["h"](V["d"],this)})},t.prototype.getDataParams=function(t){var a=this.getData(),r=e.prototype.getDataParams.call(this,t),i=[];return a.each(a.mapDimension("value"),(function(e){i.push(e)})),r.percent=Object(n["c"])(i,t,a.hostModel.get("percentPrecision")),r.$vars.push("percent"),r},t.prototype._defaultLabelLine=function(e){E["d"](e,"labelLine",["show"]);var t=e.labelLine,a=e.emphasis.labelLine;t.show=t.show&&e.label.show,a.show=a.show&&e.emphasis.label.show},t.type="series.pie",t.defaultOption={zlevel:0,z:2,legendHoverLink:!0,center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,minAngle:0,minShowLabelAngle:0,selectedOffset:10,percentPrecision:2,stillShowZeroSum:!0,left:0,top:0,right:0,bottom:0,width:null,height:null,label:{rotate:0,show:!0,overflow:"truncate",position:"outer",alignTo:"none",edgeDistance:"25%",bleedMargin:10,distanceToLabelLine:5},labelLine:{show:!0,length:15,length2:15,smooth:!1,minTurnAngle:90,maxSurfaceAngle:90,lineStyle:{width:1,type:"solid"}},itemStyle:{borderWidth:1},labelLayout:{hideOverlap:!0},emphasis:{scale:!0,scaleSize:5},avoidLabelOverlap:!0,animationType:"expansion",animationDuration:1e3,animationTypeUpdate:"transition",animationEasingUpdate:"cubicInOut",animationDurationUpdate:500,animationEasing:"cubicInOut"},t}(B["a"]),U=z;function F(e){e.registerChartView(N),e.registerSeriesModel(U),Object(r["a"])("pie",e.registerAction),e.registerLayout(Object(o["h"])(u,"pie")),e.registerProcessor(h("pie"))}},d6d0:function(e,t,a){"use strict";a.d(t,"a",(function(){return Q}));var r=a("306e"),n=a("d26e"),i=a("82e9"),o=a("cdbd"),s=a("ff42"),l=a("6625"),c=function(e){function t(){var a=null!==e&&e.apply(this,arguments)||this;return a.type=t.type,a}return Object(o["b"])(t,e),t.prototype.getInitialData=function(e,t){return Object(l["a"])(this.getSource(),this,{useEncodeDefaulter:!0})},t.prototype.getMarkerPosition=function(e){var t=this.coordinateSystem;if(t){var a=t.dataToPoint(t.clampData(e)),r=this.getData(),n=r.getLayout("offset"),i=r.getLayout("size"),o=t.getBaseAxis().isHorizontal()?0:1;return a[o]+=n+i/2,a}return[NaN,NaN]},t.type="series.__base_bar__",t.defaultOption={zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,barMinHeight:0,barMinAngle:0,large:!1,largeThreshold:400,progressive:3e3,progressiveChunkMode:"mod"},t}(s["a"]);s["a"].registerClass(c);var u=c,h=a("7ee9"),d=function(e){function t(){var a=null!==e&&e.apply(this,arguments)||this;return a.type=t.type,a}return Object(o["b"])(t,e),t.prototype.getInitialData=function(){return Object(l["a"])(this.getSource(),this,{useEncodeDefaulter:!0,createInvertedIndices:!!this.get("realtimeSort",!0)||null})},t.prototype.getProgressive=function(){return!!this.get("large")&&this.get("progressive")},t.prototype.getProgressiveThreshold=function(){var e=this.get("progressiveThreshold"),t=this.get("largeThreshold");return t>e&&(e=t),e},t.prototype.brushSelector=function(e,t,a){return a.rect(t.getItemLayout(e))},t.type="series.bar",t.dependencies=["grid","polar"],t.defaultOption=Object(h["d"])(u.defaultOption,{clip:!0,roundCap:!1,showBackground:!1,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)",borderColor:null,borderWidth:0,borderType:"solid",borderRadius:0,shadowBlur:0,shadowColor:null,shadowOffsetX:0,shadowOffsetY:0,opacity:1},select:{itemStyle:{borderColor:"#212121"}},realtimeSort:!1}),t}(u),g=d,p=a("21ac"),f=a("48b8"),b=a("2196"),m=a("b3e3"),y=a("9945"),v=a("d86a"),x=a("7a9c"),O=a("0437"),_=a("0094"),A=a("1e0b"),w=function(){function e(){this.cx=0,this.cy=0,this.r0=0,this.r=0,this.startAngle=0,this.endAngle=2*Math.PI,this.clockwise=!0}return e}(),S=function(e){function t(t){var a=e.call(this,t)||this;return a.type="sausage",a}return Object(o["b"])(t,e),t.prototype.getDefaultShape=function(){return new w},t.prototype.buildPath=function(e,t){var a=t.cx,r=t.cy,n=Math.max(t.r0||0,0),i=Math.max(t.r,0),o=.5*(i-n),s=n+o,l=t.startAngle,c=t.endAngle,u=t.clockwise,h=Math.cos(l),d=Math.sin(l),g=Math.cos(c),p=Math.sin(c),f=u?c-l<2*Math.PI:l-c<2*Math.PI;f&&(e.moveTo(h*n+a,d*n+r),e.arc(h*s+a,d*s+r,o,-Math.PI+l,l,!u)),e.arc(a,r,i,l,c,!u),e.moveTo(g*i+a,p*i+r),e.arc(g*s+a,p*s+r,o,c-2*Math.PI,c-Math.PI,!u),0!==n&&(e.arc(a,r,n,c,l,u),e.moveTo(h*n+a,p*n+r)),e.closePath()},t}(p["b"]),I=S,L=a("5e039"),M=a("11a1"),D=a("9132"),j=[0,0],P=Math.max,T=Math.min;function N(e,t){var a=e.getArea&&e.getArea();if(Object(M["a"])(e,"cartesian2d")){var r=e.getBaseAxis();if("category"!==r.type||!r.onBand){var n=t.getLayout("bandWidth");r.isHorizontal()?(a.x-=n,a.width+=2*n):(a.y-=n,a.height+=2*n)}}return a}var R=function(e){function t(){var a=e.call(this)||this;return a.type=t.type,a._isFirstFrame=!0,a}return Object(o["b"])(t,e),t.prototype.render=function(e,t,a,r){this._model=e,this._removeOnRenderedListener(a),this._updateDrawMode(e);var n=e.get("coordinateSystem");("cartesian2d"===n||"polar"===n)&&(this._isLargeDraw?this._renderLarge(e,t,a):this._renderNormal(e,t,a,r))},t.prototype.incrementalPrepareRender=function(e){this._clear(),this._updateDrawMode(e),this._updateLargeClip(e)},t.prototype.incrementalRender=function(e,t){this._incrementalRenderLarge(e,t)},t.prototype._updateDrawMode=function(e){var t=e.pipelineContext.large;null!=this._isLargeDraw&&t===this._isLargeDraw||(this._isLargeDraw=t,this._clear())},t.prototype._renderNormal=function(e,t,a,r){var n,i=this.group,o=e.getData(),s=this._data,l=e.coordinateSystem,c=l.getBaseAxis();"cartesian2d"===l.type?n=c.isHorizontal():"polar"===l.type&&(n="angle"===c.dim);var u=e.isAnimationEnabled()?e:null,h=E(e,l);h&&this._enableRealtimeSort(h,o,a);var d=e.get("clip",!0)||h,g=N(l,o);i.removeClipPath();var p=e.get("roundCap",!0),m=e.get("showBackground",!0),y=e.getModel("backgroundStyle"),v=y.get("borderRadius")||0,x=[],O=this._backgroundEls,_=r&&r.isInitSort,A=r&&"changeAxisOrder"===r.type;function w(e){var t=W[l.type](o,e),a=$(l,n,t);return a.useStyle(y.getItemStyle()),"cartesian2d"===l.type&&a.setShape("r",v),x[e]=a,a}o.diff(s).add((function(t){var a=o.getItemModel(t),r=W[l.type](o,t,a);if(m&&w(t),o.hasValue(t)){var s=!1;d&&(s=k[l.type](g,r));var f=C[l.type](e,o,t,r,n,u,c.model,!1,p);B(f,o,t,a,r,e,n,"polar"===l.type),_?f.attr({shape:r}):h?V(h,u,f,r,t,n,!1,!1):Object(b["initProps"])(f,{shape:r},e,t),o.setItemGraphicEl(t,f),i.add(f),f.ignore=s}})).update((function(t,a){var r=o.getItemModel(t),f=W[l.type](o,t,r);if(m){var S=void 0;0===O.length?S=w(a):(S=O[a],S.useStyle(y.getItemStyle()),"cartesian2d"===l.type&&S.setShape("r",v),x[t]=S);var I=W[l.type](o,t),L=J(n,I,l);Object(b["updateProps"])(S,{shape:L},u,t)}var M=s.getItemGraphicEl(a);if(!o.hasValue(t))return i.remove(M),void(M=null);var D=!1;d&&(D=k[l.type](g,f),D&&i.remove(M)),M||(M=C[l.type](e,o,t,f,n,u,c.model,!!M,p)),A||B(M,o,t,r,f,e,n,"polar"===l.type),_?M.attr({shape:f}):h?V(h,u,M,f,t,n,!0,A):Object(b["updateProps"])(M,{shape:f},e,t,null),o.setItemGraphicEl(t,M),M.ignore=D,i.add(M)})).remove((function(t){var a=s.getItemGraphicEl(t);a&&Object(b["removeElementWithFadeOut"])(a,e,t)})).execute();var S=this._backgroundGroup||(this._backgroundGroup=new f["a"]);S.removeAll();for(var I=0;I<x.length;++I)S.add(x[I]);i.add(S),this._backgroundEls=x,this._data=o},t.prototype._renderLarge=function(e,t,a){this._clear(),Y(e,this.group),this._updateLargeClip(e)},t.prototype._incrementalRenderLarge=function(e,t){this._removeBackground(),Y(t,this.group,!0)},t.prototype._updateLargeClip=function(e){var t=e.get("clip",!0)?Object(A["a"])(e.coordinateSystem,!1,e):null;t?this.group.setClipPath(t):this.group.removeClipPath()},t.prototype._enableRealtimeSort=function(e,t,a){var r=this;if(t.count()){var n=e.baseAxis;if(this._isFirstFrame)this._dispatchInitSort(t,e,a),this._isFirstFrame=!1;else{var i=function(e){var a=t.getItemGraphicEl(e);if(a){var r=a.shape;return(n.isHorizontal()?Math.abs(r.height):Math.abs(r.width))||0}return 0};this._onRendered=function(){r._updateSortWithinSameData(t,i,n,a)},a.getZr().on("rendered",this._onRendered)}}},t.prototype._dataSort=function(e,t,a){var n=[];return e.each(e.mapDimension(t.dim),(function(e,t){var r=a(t);r=null==r?NaN:r,n.push({dataIndex:t,mappedValue:r,ordinalNumber:e})})),n.sort((function(e,t){return t.mappedValue-e.mappedValue})),{ordinalNumbers:Object(r["E"])(n,(function(e){return e.ordinalNumber}))}},t.prototype._isOrderChangedWithinSameData=function(e,t,a){for(var r=a.scale,n=e.mapDimension(a.dim),i=Number.MAX_VALUE,o=0,s=r.getOrdinalMeta().categories.length;o<s;++o){var l=e.rawIndexOf(n,r.getRawOrdinalNumber(o)),c=l<0?Number.MIN_VALUE:t(e.indexOfRawIndex(l));if(c>i)return!0;i=c}return!1},t.prototype._isOrderDifferentInView=function(e,t){for(var a=t.scale,r=a.getExtent(),n=Math.max(0,r[0]),i=Math.min(r[1],a.getOrdinalMeta().categories.length-1);n<=i;++n)if(e.ordinalNumbers[n]!==a.getRawOrdinalNumber(n))return!0},t.prototype._updateSortWithinSameData=function(e,t,a,r){if(this._isOrderChangedWithinSameData(e,t,a)){var n=this._dataSort(e,a,t);this._isOrderDifferentInView(n,a)&&(this._removeOnRenderedListener(r),r.dispatchAction({type:"changeAxisOrder",componentType:a.dim+"Axis",axisId:a.index,sortInfo:n}))}},t.prototype._dispatchInitSort=function(e,t,a){var r=t.baseAxis,n=this._dataSort(e,r,(function(a){return e.get(e.mapDimension(t.otherAxis.dim),a)}));a.dispatchAction({type:"changeAxisOrder",componentType:r.dim+"Axis",isInitSort:!0,axisId:r.index,sortInfo:n,animation:{duration:0}})},t.prototype.remove=function(e,t){this._clear(this._model),this._removeOnRenderedListener(t)},t.prototype.dispose=function(e,t){this._removeOnRenderedListener(t)},t.prototype._removeOnRenderedListener=function(e){this._onRendered&&(e.getZr().off("rendered",this._onRendered),this._onRendered=null)},t.prototype._clear=function(e){var t=this.group,a=this._data;e&&e.isAnimationEnabled()&&a&&!this._isLargeDraw?(this._removeBackground(),this._backgroundEls=[],a.eachItemGraphicEl((function(t){Object(b["removeElementWithFadeOut"])(t,e,Object(v["a"])(t).dataIndex)}))):t.removeAll(),this._data=null,this._isFirstFrame=!0},t.prototype._removeBackground=function(){this.group.remove(this._backgroundGroup),this._backgroundGroup=null},t.type="bar",t}(L["a"]),k={cartesian2d:function(e,t){var a=t.width<0?-1:1,r=t.height<0?-1:1;a<0&&(t.x+=t.width,t.width=-t.width),r<0&&(t.y+=t.height,t.height=-t.height);var n=e.x+e.width,i=e.y+e.height,o=P(t.x,e.x),s=T(t.x+t.width,n),l=P(t.y,e.y),c=T(t.y+t.height,i),u=s<o,h=c<l;return t.x=u&&o>n?s:o,t.y=h&&l>i?c:l,t.width=u?0:s-o,t.height=h?0:c-l,a<0&&(t.x+=t.width,t.width=-t.width),r<0&&(t.y+=t.height,t.height=-t.height),u||h},polar:function(e,t){var a=t.r0<=t.r?1:-1;if(a<0){var r=t.r;t.r=t.r0,t.r0=r}var n=T(t.r,e.r),i=P(t.r0,e.r0);t.r=n,t.r0=i;var o=n-i<0;if(a<0){r=t.r;t.r=t.r0,t.r0=r}return o}},C={cartesian2d:function(e,t,a,n,i,o,s,l,c){var u=new m["a"]({shape:Object(r["l"])({},n),z2:1});if(u.__dataIndex=a,u.name="item",o){var h=u.shape,d=i?"height":"width";h[d]=0}return u},polar:function(e,t,a,n,i,o,s,l,c){var u=n.startAngle<n.endAngle,h=!i&&c?I:y["a"],d=new h({shape:Object(r["i"])({clockwise:u},n),z2:1});if(d.name="item",o){var g=d.shape,p=i?"r":"endAngle",f={};g[p]=i?0:n.startAngle,f[p]=n[p],(l?b["updateProps"]:b["initProps"])(d,{shape:f},o)}return d}};function E(e,t){var a=e.get("realtimeSort",!0),r=t.getBaseAxis();if(a&&"category"===r.type&&"cartesian2d"===t.type)return{baseAxis:r,otherAxis:t.getOtherAxis(r)}}function V(e,t,a,r,n,i,o,s){var l,c;i?(c={x:r.x,width:r.width},l={y:r.y,height:r.height}):(c={y:r.y,height:r.height},l={x:r.x,width:r.width}),s||(o?b["updateProps"]:b["initProps"])(a,{shape:l},t,n,null);var u=t?e.baseAxis.model:null;(o?b["updateProps"]:b["initProps"])(a,{shape:c},u,n)}var W={cartesian2d:function(e,t,a){var r=e.getItemLayout(t),n=a?z(a,r):0,i=r.width>0?1:-1,o=r.height>0?1:-1;return{x:r.x+i*n/2,y:r.y+o*n/2,width:r.width-i*n,height:r.height-o*n}},polar:function(e,t,a){var r=e.getItemLayout(t);return{cx:r.cx,cy:r.cy,r0:r.r0,r:r.r,startAngle:r.startAngle,endAngle:r.endAngle}}};function G(e){return null!=e.startAngle&&null!=e.endAngle&&e.startAngle===e.endAngle}function B(e,t,a,n,i,o,s,l){var c=t.getItemVisual(a,"style");l||e.setShape("r",n.get(["itemStyle","borderRadius"])||0),e.useStyle(c);var u=n.getShallow("cursor");if(u&&e.attr("cursor",u),!l){var h=s?i.height>0?"bottom":"top":i.width>0?"left":"right",d=Object(O["d"])(n);Object(O["f"])(e,d,{labelFetcher:o,labelDataIndex:a,defaultText:Object(D["b"])(o.getData(),a),inheritColor:c.fill,defaultOpacity:c.opacity,defaultOutsidePosition:h});var g=e.getTextContent();Object(O["g"])(g,d,o.getRawValue(a),(function(e){return Object(D["a"])(t,e)}))}var p=n.getModel(["emphasis"]);Object(x["m"])(e,p.get("focus"),p.get("blurScope")),Object(x["D"])(e,n),G(i)&&(e.style.fill="none",e.style.stroke="none",Object(r["j"])(e.states,(function(e){e.style&&(e.style.fill=e.style.stroke="none")})))}function z(e,t){var a=e.get(["itemStyle","borderColor"]);if(!a||"none"===a)return 0;var r=e.get(["itemStyle","borderWidth"])||0,n=isNaN(t.width)?Number.MAX_VALUE:Math.abs(t.width),i=isNaN(t.height)?Number.MAX_VALUE:Math.abs(t.height);return Math.min(r,n,i)}var U=function(){function e(){}return e}(),F=function(e){function t(t){var a=e.call(this,t)||this;return a.type="largeBar",a}return Object(o["b"])(t,e),t.prototype.getDefaultShape=function(){return new U},t.prototype.buildPath=function(e,t){for(var a=t.points,r=this.__startPoint,n=this.__baseDimIdx,i=0;i<a.length;i+=2)r[n]=a[i+n],e.moveTo(r[0],r[1]),e.lineTo(a[i],a[i+1])},t}(p["b"]);function Y(e,t,a){var r=e.getData(),n=[],i=r.getLayout("valueAxisHorizontal")?1:0;n[1-i]=r.getLayout("valueAxisStart");var o=r.getLayout("largeDataIndices"),s=r.getLayout("barWidth"),l=e.getModel("backgroundStyle"),c=e.get("showBackground",!0);if(c){var u=r.getLayout("largeBackgroundPoints"),h=[];h[1-i]=r.getLayout("backgroundStart");var d=new F({shape:{points:u},incremental:!!a,silent:!0,z2:0});d.__startPoint=h,d.__baseDimIdx=i,d.__largeDataIndices=o,d.__barWidth=s,Z(d,l,r),t.add(d)}var g=new F({shape:{points:r.getLayout("largePoints")},incremental:!!a});g.__startPoint=n,g.__baseDimIdx=i,g.__largeDataIndices=o,g.__barWidth=s,t.add(g),q(g,e,r),Object(v["a"])(g).seriesIndex=e.seriesIndex,e.get("silent")||(g.on("mousedown",H),g.on("mousemove",H))}var H=Object(_["b"])((function(e){var t=this,a=X(t,e.offsetX,e.offsetY);Object(v["a"])(t).dataIndex=a>=0?a:null}),30,!1);function X(e,t,a){var r=e.__baseDimIdx,n=1-r,i=e.shape.points,o=e.__largeDataIndices,s=Math.abs(e.__barWidth/2),l=e.__startPoint[n];j[0]=t,j[1]=a;for(var c=j[r],u=j[1-r],h=c-s,d=c+s,g=0,p=i.length/2;g<p;g++){var f=2*g,b=i[f+r],m=i[f+n];if(b>=h&&b<=d&&(l<=m?u>=l&&u<=m:u>=m&&u<=l))return o[g]}return-1}function q(e,t,a){var n=a.getVisual("style");e.useStyle(Object(r["l"])({},n)),e.style.fill=null,e.style.stroke=n.fill,e.style.lineWidth=a.getLayout("barWidth")}function Z(e,t,a){var r=t.get("borderColor")||t.get("color"),n=t.getItemStyle();e.useStyle(n),e.style.fill=null,e.style.stroke=r,e.style.lineWidth=a.getLayout("barWidth")}function J(e,t,a){if(Object(M["a"])(a,"cartesian2d")){var r=t,n=a.getArea();return{x:e?r.x:n.x,y:e?n.y:r.y,width:e?r.width:n.width,height:e?n.height:r.height}}n=a.getArea();var i=t;return{cx:n.cx,cy:n.cy,r0:e?n.r0:i.r0,r:e?n.r:i.r,startAngle:e?i.startAngle:0,endAngle:e?i.endAngle:2*Math.PI}}function $(e,t,a){var r="polar"===e.type?y["a"]:m["a"];return new r({shape:J(t,a,e),silent:!0,z2:0})}var K=R;function Q(e){e.registerChartView(K),e.registerSeriesModel(g),e.registerLayout(e.PRIORITY.VISUAL.LAYOUT,r["h"](n["b"],"bar")),e.registerLayout(e.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT,n["a"]),e.registerProcessor(e.PRIORITY.PROCESSOR.STATISTIC,Object(i["a"])("bar")),e.registerAction({type:"changeAxisOrder",event:"changeAxisOrder",update:"update"},(function(e,t){var a=e.componentType||"series";t.eachComponent({mainType:a,query:e},(function(t){e.sortInfo&&t.axis.setCategorySortInfo(e.sortInfo)}))}))}}}]);