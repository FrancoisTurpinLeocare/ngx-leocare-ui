"use strict";(self.webpackChunkngx_leocare_ui=self.webpackChunkngx_leocare_ui||[]).push([[474],{"./projects/ngx-leocare-ui/src/lib/icon/icon.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SquareL:()=>SquareL,SquareM:()=>SquareM,SquareS:()=>SquareS,SquareXL:()=>SquareXL,SquareXS:()=>SquareXS,SquareXXL:()=>SquareXXL,SquareXXS:()=>SquareXXS,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./projects/ngx-leocare-ui/src/lib/icon/icon.component.ts"),_icon_config__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/ngx-leocare-ui/src/lib/icon/icon.config.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Icon",component:_icon_component__WEBPACK_IMPORTED_MODULE_0__.o,tags:["autodocs"],render:args=>({props:{...args,description:{component:"Composant d'icone, charge un svg depuis son nom, applique les couleurs du design system depuis son enum de config"}}})},SquareXXL={args:{name:"cross",size:_icon_config__WEBPACK_IMPORTED_MODULE_1__.sk.SQUARE_75PX,color:_icon_config__WEBPACK_IMPORTED_MODULE_1__.c$.GREY_0}},SquareXL={args:{name:"cross",size:_icon_config__WEBPACK_IMPORTED_MODULE_1__.sk.SQUARE_50PX,color:_icon_config__WEBPACK_IMPORTED_MODULE_1__.c$.GREY_0}},SquareL={args:{name:"cross",size:_icon_config__WEBPACK_IMPORTED_MODULE_1__.sk.SQUARE_24PX,color:_icon_config__WEBPACK_IMPORTED_MODULE_1__.c$.GREY_0}},SquareM={args:{name:"cross",size:_icon_config__WEBPACK_IMPORTED_MODULE_1__.sk.SQUARE_20PX,color:_icon_config__WEBPACK_IMPORTED_MODULE_1__.c$.GREY_0}},SquareS={args:{name:"cross",size:_icon_config__WEBPACK_IMPORTED_MODULE_1__.sk.SQUARE_16PX,color:_icon_config__WEBPACK_IMPORTED_MODULE_1__.c$.GREY_0}},SquareXS={args:{name:"cross",size:_icon_config__WEBPACK_IMPORTED_MODULE_1__.sk.SQUARE_12PX,color:_icon_config__WEBPACK_IMPORTED_MODULE_1__.c$.GREY_0}},SquareXXS={args:{name:"cross",size:_icon_config__WEBPACK_IMPORTED_MODULE_1__.sk.SQUARE_10PX,color:_icon_config__WEBPACK_IMPORTED_MODULE_1__.c$.GREY_0}}},"./projects/ngx-leocare-ui/src/lib/icon/icon.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>IconComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),icon_config=__webpack_require__("./projects/ngx-leocare-ui/src/lib/icon/icon.config.ts");let IconComponent=class IconComponent{constructor(){this.name="",this.size=icon_config.sk.SQUARE_20PX,this.color=icon_config.c$.GREY_40,this.isFill=!1,this.baseIconUrl="./assets/img/icons/",this.iconStyles="",this.iconSizeClasses=""}ngOnInit(){this.iconStyles=icon_config.q5[this.color],this.iconSizeClasses=icon_config.fK[this.size]}};IconComponent.propDecorators={name:[{type:core.Input}],size:[{type:core.Input}],color:[{type:core.Input}],isFill:[{type:core.Input}]},IconComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"leo-icon",template:'<img\n  [src]="\n    isFill ? baseIconUrl + name + \'-fill.svg\' : baseIconUrl + name + \'.svg\'\n  "\n  [alt]="\'icon\' + name"\n  [style]="iconStyles"\n  [ngClass]="iconSizeClasses"\n/>\n',changeDetection:core.ChangeDetectionStrategy.OnPush})],IconComponent)},"./projects/ngx-leocare-ui/src/lib/icon/icon.config.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var EIconColor;__webpack_require__.d(__webpack_exports__,{c$:()=>EIconColor,fK:()=>ICON_SIZE_CONFIG,q5:()=>ICON_COLOR_CONFIG,sk:()=>EIconSize}),function(EIconColor){EIconColor.TRANSPARENT="TRANSPARENT",EIconColor.PURPLE_55="PURPLE_55",EIconColor.CYAN_70="CYAN_70",EIconColor.YELLOW_55="YELLOW_55",EIconColor.GREY_100="GREY_100",EIconColor.GREY_95="GREY_95",EIconColor.GREY_90="GREY_90",EIconColor.GREY_80="GREY_80",EIconColor.GREY_40="GREY_40",EIconColor.GREY_25="GREY_25",EIconColor.GREY_0="GREY_0",EIconColor.PURPLE_95="PURPLE_95",EIconColor.CYAN_90="CYAN_90",EIconColor.YELLOW_90="YELLOW_90",EIconColor.PURPLE_25="PURPLE_25",EIconColor.YELLOW_25="YELLOW_25",EIconColor.GREEN_50="GREEN_50",EIconColor.RED_70="RED_70",EIconColor.ORANGE_65="ORANGE_65",EIconColor.GREEN_95="GREEN_95",EIconColor.RED_95="RED_95",EIconColor.ORANGE_90="ORANGE_90",EIconColor.GREEN_30="GREEN_30",EIconColor.RED_40="RED_40",EIconColor.ORANGE_30="ORANGE_30"}(EIconColor||(EIconColor={}));const ICON_COLOR_CONFIG={[EIconColor.TRANSPARENT]:"",[EIconColor.PURPLE_55]:"filter: invert(23%) sepia(84%) saturate(2765%) hue-rotate(250deg) brightness(90%) contrast(85%);",[EIconColor.CYAN_70]:"filter: invert(81%) sepia(26%) saturate(619%) hue-rotate(119deg) brightness(96%) contrast(105%);",[EIconColor.YELLOW_55]:"filter: invert(77%) sepia(25%) saturate(1353%) hue-rotate(5deg) brightness(112%) contrast(85%);",[EIconColor.GREY_100]:"filter: invert(98%) sepia(13%) saturate(0%) hue-rotate(319deg) brightness(113%) contrast(100%);",[EIconColor.GREY_95]:"filter: invert(93%) sepia(3%) saturate(185%) hue-rotate(183deg) brightness(105%) contrast(96%);",[EIconColor.GREY_90]:"filter: invert(100%) sepia(2%) saturate(2401%) hue-rotate(225deg) brightness(114%) contrast(84%);",[EIconColor.GREY_80]:"filter: invert(88%) sepia(8%) saturate(333%) hue-rotate(157deg) brightness(91%) contrast(99%);",[EIconColor.GREY_40]:"filter: invert(38%) sepia(3%) saturate(4484%) hue-rotate(186deg) brightness(93%) contrast(80%);",[EIconColor.GREY_25]:"filter: invert(20%) sepia(13%) saturate(1342%) hue-rotate(185deg) brightness(95%) contrast(94%);",[EIconColor.GREY_0]:"filter: invert(0%) sepia(3%) saturate(32%) hue-rotate(7deg) brightness(102%) contrast(101%);",[EIconColor.PURPLE_95]:"filter: invert(93%) sepia(3%) saturate(973%) hue-rotate(210deg) brightness(102%) contrast(96%);",[EIconColor.CYAN_90]:"filter: invert(90%) sepia(11%) saturate(569%) hue-rotate(100deg) brightness(113%) contrast(96%);",[EIconColor.YELLOW_90]:"filter: invert(90%) sepia(13%) saturate(661%) hue-rotate(346deg) brightness(107%) contrast(101%);",[EIconColor.PURPLE_25]:"filter: invert(8%) sepia(72%) saturate(6612%) hue-rotate(274deg) brightness(80%) contrast(113%);",[EIconColor.YELLOW_25]:"filter: invert(37%) sepia(22%) saturate(2742%) hue-rotate(26deg) brightness(96%) contrast(95%);",[EIconColor.GREEN_50]:"filter: invert(67%) sepia(23%) saturate(955%) hue-rotate(103deg) brightness(95%) contrast(87%);",[EIconColor.RED_70]:"filter: invert(49%) sepia(37%) saturate(835%) hue-rotate(312deg) brightness(104%) contrast(91%);",[EIconColor.ORANGE_65]:"filter: invert(83%) sepia(53%) saturate(2201%) hue-rotate(327deg) brightness(105%) contrast(99%);",[EIconColor.GREEN_95]:"filter: invert(98%) sepia(91%) saturate(183%) hue-rotate(51deg) brightness(101%) contrast(97%);",[EIconColor.RED_95]:"filter: invert(81%) sepia(12%) saturate(738%) hue-rotate(311deg) brightness(107%) contrast(112%);",[EIconColor.ORANGE_90]:"filter: invert(89%) sepia(21%) saturate(834%) hue-rotate(310deg) brightness(115%) contrast(101%);",[EIconColor.GREEN_30]:"filter: invert(38%) sepia(60%) saturate(439%) hue-rotate(99deg) brightness(92%) contrast(91%);",[EIconColor.RED_40]:"filter: invert(11%) sepia(96%) saturate(5012%) hue-rotate(347deg) brightness(80%) contrast(98%);",[EIconColor.ORANGE_30]:"filter: invert(33%) sepia(42%) saturate(2279%) hue-rotate(20deg) brightness(96%) contrast(99%);"};var EIconSize;!function(EIconSize){EIconSize.SQUARE_10PX="SQUARE_10PX",EIconSize.SQUARE_12PX="SQUARE_12PX",EIconSize.SQUARE_16PX="SQUARE_16PX",EIconSize.SQUARE_20PX="SQUARE_20PX",EIconSize.SQUARE_24PX="SQUARE_24PX",EIconSize.SQUARE_34PX="SQUARE_34PX",EIconSize.SQUARE_50PX="SQUARE_50PX",EIconSize.SQUARE_75PX="SQUARE_75PX"}(EIconSize||(EIconSize={}));const ICON_SIZE_CONFIG={[EIconSize.SQUARE_10PX]:"w-[10px] h-[10px]",[EIconSize.SQUARE_12PX]:"w-[12px] h-[12px]",[EIconSize.SQUARE_16PX]:"w-[16px] h-[16px]",[EIconSize.SQUARE_20PX]:"w-[20px] h-[20px]",[EIconSize.SQUARE_24PX]:"w-[24px] h-[24px]",[EIconSize.SQUARE_34PX]:"w-[34px] h-[34px]",[EIconSize.SQUARE_50PX]:"w-[50px] h-[50px]",[EIconSize.SQUARE_75PX]:"w-[75px] h-[75px]"}}}]);