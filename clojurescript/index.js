if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}


;(function(){
var g;function k(a,c){this.a=[];this.g=c;for(var d=!0,b=a.length-1;0<=b;b--){var e=a[b]|0;d&&e==c||(this.a[b]=e,d=!1)}}var l={};function n(a){if(-128<=a&&128>a){var c=l[a];if(c)return c}c=new k([a|0],0>a?-1:0);-128<=a&&128>a&&(l[a]=c);return c}function p(a){if(isNaN(a)||!isFinite(a))return q;if(0>a)return p(-a).b();for(var c=[],d=1,b=0;a>=d;b++)c[b]=a/d|0,d*=r;return new k(c,0)}var r=4294967296,q=n(0),t=n(1),u=n(16777216);g=k.prototype;g.v=function(){return 0<this.a.length?this.a[0]:this.g};
g.i=function(){if(this.c())return-this.b().i();for(var a=0,c=1,d=0;d<this.a.length;d++){var b=v(this,d);a+=(0<=b?b:r+b)*c;c*=r}return a};g.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(this.f())return"0";if(this.c())return"-"+this.b().toString(a);for(var c=p(Math.pow(a,6)),d=this,b="";;){var e=w(d,c),f=(d.j(e.multiply(c)).v()>>>0).toString(a);d=e;if(d.f())return f+b;for(;6>f.length;)f="0"+f;b=""+f+b}};function v(a,c){return 0>c?0:c<a.a.length?a.a[c]:a.g}
g.f=function(){if(0!=this.g)return!1;for(var a=0;a<this.a.length;a++)if(0!=this.a[a])return!1;return!0};g.c=function(){return-1==this.g};g.o=function(a){return 0<this.compare(a)};g.s=function(a){return 0<=this.compare(a)};g.l=function(){return 0>this.compare(u)};g.m=function(a){return 0>=this.compare(a)};g.compare=function(a){a=this.j(a);return a.c()?-1:a.f()?0:1};g.b=function(){return this.u().add(t)};
g.add=function(a){for(var c=Math.max(this.a.length,a.a.length),d=[],b=0,e=0;e<=c;e++){var f=b+(v(this,e)&65535)+(v(a,e)&65535),h=(f>>>16)+(v(this,e)>>>16)+(v(a,e)>>>16);b=h>>>16;f&=65535;h&=65535;d[e]=h<<16|f}return new k(d,d[d.length-1]&-2147483648?-1:0)};g.j=function(a){return this.add(a.b())};
g.multiply=function(a){if(this.f()||a.f())return q;if(this.c())return a.c()?this.b().multiply(a.b()):this.b().multiply(a).b();if(a.c())return this.multiply(a.b()).b();if(this.l()&&a.l())return p(this.i()*a.i());for(var c=this.a.length+a.a.length,d=[],b=0;b<2*c;b++)d[b]=0;for(b=0;b<this.a.length;b++)for(var e=0;e<a.a.length;e++){var f=v(this,b)>>>16,h=v(this,b)&65535,m=v(a,e)>>>16,z=v(a,e)&65535;d[2*b+2*e]+=h*z;x(d,2*b+2*e);d[2*b+2*e+1]+=f*z;x(d,2*b+2*e+1);d[2*b+2*e+1]+=h*m;x(d,2*b+2*e+1);d[2*b+2*
e+2]+=f*m;x(d,2*b+2*e+2)}for(b=0;b<c;b++)d[b]=d[2*b+1]<<16|d[2*b];for(b=c;b<2*c;b++)d[b]=0;return new k(d,0)};function x(a,c){for(;(a[c]&65535)!=a[c];)a[c+1]+=a[c]>>>16,a[c]&=65535,c++}
function w(a,c){if(c.f())throw Error("division by zero");if(a.f())return q;if(a.c())return c.c()?w(a.b(),c.b()):w(a.b(),c).b();if(c.c())return w(a,c.b()).b();if(30<a.a.length){if(a.c()||c.c())throw Error("slowDivide_ only works with positive integers.");for(var d=t,b=c;b.m(a);)d=d.shiftLeft(1),b=b.shiftLeft(1);var e=d.h(1),f=b.h(1);b=b.h(2);for(d=d.h(2);!b.f();){var h=f.add(b);h.m(a)&&(e=e.add(d),f=h);b=b.h(1);d=d.h(1)}return e}d=q;for(b=a;b.s(c);){e=Math.max(1,Math.floor(b.i()/c.i()));f=Math.ceil(Math.log(e)/
Math.LN2);f=48>=f?1:Math.pow(2,f-48);h=p(e);for(var m=h.multiply(c);m.c()||m.o(b);)e-=f,h=p(e),m=h.multiply(c);h.f()&&(h=t);d=d.add(h);b=b.j(m)}return d}g.u=function(){for(var a=this.a.length,c=[],d=0;d<a;d++)c[d]=~this.a[d];return new k(c,~this.g)};g.shiftLeft=function(a){var c=a>>5;a%=32;for(var d=this.a.length+c+(0<a?1:0),b=[],e=0;e<d;e++)b[e]=0<a?v(this,e-c)<<a|v(this,e-c-1)>>>32-a:v(this,e-c);return new k(b,this.g)};
g.h=function(a){var c=a>>5;a%=32;for(var d=this.a.length-c,b=[],e=0;e<d;e++)b[e]=0<a?v(this,e+c)>>>a|v(this,e+c+1)<<32-a:v(this,e+c);return new k(b,this.g)};if("undefined"===typeof y)var y={};if("undefined"===typeof A)var A=null;if("undefined"===typeof B)var B=null;if("undefined"===typeof C)var C=null;if("undefined"!==typeof Symbol){var D=Symbol;"object"!=typeof D||!D||D instanceof Array||D instanceof Object||Object.prototype.toString.call(D)}var E="undefined"!==typeof Math.imul&&0!==Math.imul(4294967295,5)?function(a,c){return Math.imul(a,c)}:function(a,c){var d=a&65535,b=c&65535;return d*b+((a>>>16&65535)*b+d*(c>>>16&65535)<<16>>>0)|0};
function F(a){a=E(a|0,-862048943);a=0^(E(a<<15|a>>>-15,461845907)|0);a=(E(a<<13|a>>>-13,5)+-430675100|0)^0;a=E(a^a>>>16,-2048144789);E(a^a>>>13,-1028477387)}F(1);F(0);document.body.appendChild(new Text("Hello, World"));
})();
