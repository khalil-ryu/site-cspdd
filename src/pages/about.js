import React from 'react';
import { render } from 'react-dom';
import ResponsiveGallery from 'react-responsive-gallery';
import { FacebookPlayer } from "reactjs-media";
const photos = [
   {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/168136382_1539080336280739_8678450864011712110_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=1EpHYfo4svwAX-lASj2&_nc_ht=scontent.ftun7-1.fna&oh=3dbb3a855ed7a99f39663cf4082a66d6&oe=60AA7773",
    width: 1,
    height: 1
  },
   {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/167848897_1539080762947363_3950704807209091131_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=O9CzeS4-P88AX-y6nkW&_nc_ht=scontent.ftun7-1.fna&oh=36932f528e73ffdd66386dcf72e476f2&oe=60AA2A0A",
    width: 1,
    height: 1
  },
   {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/167661340_1539136292941810_417056400544784545_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=0_MkOmm3Gv0AX-LTDOo&_nc_oc=AQmejbhiMmuYeTBkwG4LAvYoGB4K82I-_5bqnfmJAv3wMfQqMf219M-P0V5Y2JruqMU&_nc_ht=scontent.ftun7-1.fna&oh=3d3f56727860cd4cfca4154ca0023888&oe=60AABF1B",
    width: 1,
    height: 1
  },
   {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/168082498_1539136962941743_1715654633425008079_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=SlSmy0RYvx8AX9J8KLR&_nc_ht=scontent.ftun7-1.fna&oh=7e3f15153ca70b3eb5cd1123b18533fe&oe=60ABA667",
    width: 1,
    height: 1
  },
   {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/167572681_1539136092941830_3213783001607162152_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_ohc=9acn0ChJmZYAX96QHj4&_nc_ht=scontent.ftun7-1.fna&oh=248f2e43f6df6d6e177cd54c17905185&oe=60AB9416",
    width: 1,
    height: 1
  },
  
  {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/168313073_1539136166275156_3733580238665110232_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_ohc=WUWBlh5KkhsAX8ErEli&_nc_ht=scontent.ftun7-1.fna&oh=1fa9d08ef64d39313d7c2aa33e54dcde&oe=60AD2C79",
    width: 1,
    height: 1
  },
  {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/173010148_5174067576001311_5190005460338960031_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=U1gK26VcO2cAX_8nj0j&_nc_ht=scontent.ftun7-1.fna&oh=5121d2abe7609ef6e99a18f3dce25ae6&oe=60AA7870",
    width: 1,
    height: 1
  },
  {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/172228347_5174067362667999_1070810387904342194_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=mfQT-9JGQGwAX8PM4BB&_nc_ht=scontent.ftun7-1.fna&oh=73de2920579fa71832c2c6ed59f4f9bd&oe=60AA0F0D",
    width: 1,
    height: 1
  },
  {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/172089218_5174067049334697_72903483756008463_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=GCVGEyyjMakAX9OWuVI&_nc_ht=scontent.ftun7-1.fna&oh=ada78d37b12e91b05e5c68d45c81ea32&oe=60A7C908",

    width: 1,
    height: 1
  },
  {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/170928993_5160286080712794_3029193321175467015_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=w1GuYmAFF4UAX_K4ZxI&_nc_ht=scontent.ftun7-1.fna&oh=a37c3d9ce68beb2a315886dfab580a86&oe=60A88442",

    width: 1,
    height: 1
  },
  {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/158220399_5006171016124302_9219360760829318042_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=xOwIb3fbje8AX-vY4w1&_nc_ht=scontent.ftun7-1.fna&oh=4a528ce38ee8f483bf0096e3f4045a98&oe=60A79DFE",

    width: 1,
    height: 1
  },
  {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/158223381_5006170742790996_172525097390476205_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=NvVkFl-5sN4AX8ueMIW&_nc_ht=scontent.ftun7-1.fna&oh=329cdf0222ee14e96174fe9405d54bdd&oe=60A8130F",

    width: 1,
    height: 1
  },
  {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/158111877_5006170436124360_8479151229225232734_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=xrKX2Kj1n2YAX_5J0rb&_nc_ht=scontent.ftun7-1.fna&oh=9e009357fe2f74e5a0c879fe5251502d&oe=60A838FE",

    width: 1,
    height: 1
  },
  {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/118761202_4183968315011247_4150291998738299431_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=4x0AryxaAyIAX8s0dxU&_nc_ht=scontent.ftun7-1.fna&oh=6f3885eba4911baa1cef75bb9dd90c48&oe=60A9666E",

    width: 1,
    height: 1
  },
  {
    src:     "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/118780347_4183967245011354_7098119457071188019_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=YwBQ85q98i4AX-2ApI8&_nc_ht=scontent.ftun7-1.fna&oh=871a9d193fb3340e7e22c32ab985599c&oe=60A8E995",


    width: 1,
    height: 1
  },
  {
    src:     "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/118770568_4183966658344746_6995294704935161692_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=tIrLv-sp2lEAX8inDtc&_nc_ht=scontent.ftun7-1.fna&oh=08c570a65e9ec36a3f5bef9a58ad2689&oe=60AA634A",


    width: 1,
    height: 1
  },
  {
    src:     "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/106106936_3872161842858564_7547290820206430739_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=9aO11XPJh44AX-0aoQF&_nc_ht=scontent.ftun7-1.fna&oh=c97214febe37302e516a5b123e222ecf&oe=60A91DDC",


    width: 1,
    height: 1
  },
  {
    src:     "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/106194384_3872161022858646_770694957595125767_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=hAdkmCd0xGAAX_cusAv&_nc_ht=scontent.ftun7-1.fna&oh=15a78784fc046d4ec2dbd064ec9181e4&oe=60AB2B2D",


    width: 1,
    height: 1
  },
  {
    src:     "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/106256038_3872160666192015_5830085872046461299_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=xspCo_TSkQcAX-p2D36&_nc_ht=scontent.ftun7-1.fna&oh=2f90bdf2766bb509a8667ba8de0222a7&oe=60A9937B",


    width: 1,
    height: 1
  },
  {
    src:     "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/81498939_3271561729585248_708280862055071744_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=ovqgdTvIYYkAX-kGDNg&_nc_ht=scontent.ftun7-1.fna&oh=a27c2912fae1a1f03e150e630b822151&oe=60AAACB0",


    width: 1,
    height: 1
  },
 
  {
    src:    "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/81489728_3271561372918617_1185088498961481728_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=MRJlk0y1ivIAX-hIE1i&_nc_ht=scontent.ftun7-1.fna&oh=224843807bababe6f8cac04d085f3405&oe=60A90635",

    width: 1,
    height: 1
  },
  {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/81778384_3271561269585294_77361977432735744_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=DLlHJQ8pgSMAX90rjGn&_nc_ht=scontent.ftun7-1.fna&oh=1207fd82bde07e49ce71e0a56f87f314&oe=60A914EF",

    width: 1,
    height: 1
  },
  {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/81723216_3271561109585310_211667632003219456_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=weY9IPsdrJ4AX-3byUA&_nc_ht=scontent.ftun7-1.fna&oh=92a82794cc50fc71b71c610e7b9025af&oe=60A8CED0",

    width: 1,
    height: 1
  },
  {
    src:  "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/80243929_3230246730383415_591677370461585408_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=NvSuj39xYPEAX8oII_R&_nc_ht=scontent.ftun7-1.fna&oh=7d7b757fa0612333b41da3d65ae30770&oe=60AAB50E",

    width: 1,
    height: 1
  },
  {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/79365450_3186127518128670_7268135982631747584_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=P_y2TsXL2IEAX-EroFC&_nc_ht=scontent.ftun7-1.fna&oh=8841e4cb3dbc87ff7e7113d52acf52fe&oe=60AA09CD",

    width: 1,
    height: 1
  },
  {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/79014444_3186127114795377_3330504523935383552_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=MLePQG5WzsMAX9YWWKo&_nc_ht=scontent.ftun7-1.fna&oh=aa1f36162ee533bdd3c4b483ca2d89d5&oe=60A98777",

    width: 1,
    height: 1
  },
  {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/78645249_3176088545799234_3274369808182804480_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=nEKsHuRuScQAX8qgkwc&_nc_ht=scontent.ftun7-1.fna&oh=1887eb1c88a788a5731c321665a546a2&oe=60A86C06",

    width: 1,
    height: 1
  },
   {
    src:     "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/78539858_3176088342465921_5400062110677860352_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=DUNhHZJvPDMAX-Bse25&tn=5jSd5-y7Ib4hssSD&_nc_ht=scontent.ftun7-1.fna&oh=778ce5b6fdbbed7b0955b3386ad82285&oe=60A7A0D6",

    width: 1,
    height: 1
  }
  ,
   {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/77246353_3136571613084261_5648552730692681728_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=tb-wB91TfQQAX8V1h3d&_nc_ht=scontent.ftun7-1.fna&oh=9831fd2500f8a1446a1f398365d6f96c&oe=60AA4F5C",

    width: 1,
    height: 1
  }
  ,
   {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/65719124_2748348931906533_7717099020140675072_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=QYEWEiJQn_wAX_x-rXk&_nc_ht=scontent.ftun7-1.fna&oh=dd5b5c3e65371ae781af58a72d63650c&oe=60AA9B9A",

    width: 1,
    height: 1
  }
  ,
   {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/62646522_2703593689715391_8721513191445626880_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=JdCccYngbngAX-KAUb0&_nc_ht=scontent.ftun7-1.fna&oh=5a012fcdf6870ea0d1a72c40715eacb6&oe=60AB2646",

    width: 1,
    height: 1
  }
  ,
   {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/64340442_2703593676382059_3787346554394771456_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=8eIiRmM9g4IAX-nfSvi&_nc_ht=scontent.ftun7-1.fna&oh=185811ff8e034a1b55703c71eca2b5d3&oe=60A7D200",

    width: 1,
    height: 1
  }
  ,
   {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/62210311_2688311357910291_5290817951056789504_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=W-szEJ4eURcAX8fMja_&_nc_ht=scontent.ftun7-1.fna&oh=6322f3e436e913172879f294fc4c21f1&oe=60AA2935",

    height: 1
  }
  ,
   {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/57485434_2553330701408358_7174072943264137216_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=HNy9yutBLksAX8mwJiP&_nc_ht=scontent.ftun7-1.fna&oh=81064638406062143923243ef9723012&oe=60A87FAF",

    width: 1,
    height: 1
  }
  ,
   {
    src:  "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/57238927_2553330631408365_9084810524960489472_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=-XwFlFftDNEAX8M8Rrn&_nc_ht=scontent.ftun7-1.fna&oh=6b0bc06b4cc6873163226dbff1ff8cb0&oe=60A981C7",

    width: 1,
    height: 1
  }
  ,

   {
    src:    "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/56913385_2553330441408384_320664457342615552_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=R9w9WScFxPIAX9gw9AY&_nc_ht=scontent.ftun7-1.fna&oh=08201e0b0a4dab06bf003649e1f10549&oe=60A9AAA0",

    width: 1,
    height: 1
  }
  ,
   {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/57239066_2553330284741733_2974270543311667200_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=W-l4d1haaQUAX-c-CTr&_nc_ht=scontent.ftun7-1.fna&oh=f5b0c629c437d672dd1ff12d9a840948&oe=60A9E896",

    width: 1,
    height: 1
  }
  ,
   {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/57059836_2553330108075084_4002898795338661888_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=UTgNLeXovzQAX_uJJdl&_nc_ht=scontent.ftun7-1.fna&oh=52584d80562ebd101bdce8dda45f669e&oe=60A9A894",

    width: 1,
    height: 1
  }
    ,
   {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/57317211_2553329958075099_4264163455545638912_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=QvOgIZhpdb8AX9SCXTV&_nc_ht=scontent.ftun7-1.fna&oh=61ff9e13625c622b626df3cf592548ba&oe=60A89DF5",

    width: 1,
    height: 1
  }
    ,
   {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/56837332_2553329878075107_4430641181122101248_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=JA2eQcFey5MAX96mxoS&_nc_ht=scontent.ftun7-1.fna&oh=4eddd91f0fe6d39199a48bd980e18f1e&oe=60A9757E",

    width: 1,
    height: 1
  }  ,
   {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/56781147_2528076493933779_3780482092849168384_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=FIJPDMfpgCQAX-9MaMM&_nc_ht=scontent.ftun7-1.fna&oh=210dbd3a4349518bb1a0cc63524b045a&oe=60A93D14",

    width: 1,
    height: 1
  } ,
   {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/86710187_1522489721233704_5001596240618586112_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_ohc=oh5M0V6aKqQAX9wcQOi&_nc_ht=scontent.ftun7-1.fna&oh=f611df1b279f741420bac0abeb084783&oe=60AB6086",

    width: 1,
    height: 1
  }
 ,
   {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/87152136_1522490037900339_8504824321766588416_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=730e14&_nc_ohc=FJo4PHK4RlkAX_oxuTF&_nc_ht=scontent.ftun7-1.fna&oh=8933cad73226c7021e0d6aa1200df122&oe=60AA6423",

    width: 1,
    height: 1
  }
 ,

   {
    src:    "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/86969828_1522490181233658_8255897384614100992_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=9yrJKY0rMC8AX-xQ7W0&_nc_ht=scontent.ftun7-1.fna&oh=2629a8e6aeea061cd1ac231950286c6f&oe=60AA68F6",

    width: 1,
    height: 1
  },
   {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/87201162_1522490134566996_691734633691217920_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=sZ2mqaXJKnMAX-Kry3A&_nc_ht=scontent.ftun7-1.fna&oh=dfba87e127c54d983be749c335466c22&oe=60A9C796",

    width: 1,
    height: 1
  },
   {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/86731320_1522490894566920_8413668614481117184_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=fuKfLrYD8tgAX_OXIrD&_nc_ht=scontent.ftun7-1.fna&oh=fa2fc90605ad56cdac0a4605628035af&oe=60AA34B1",

    width: 1,
    height: 1
  },
   {
    src:   "https://scontent.ftun3-1.fna.fbcdn.net/v/t1.6435-9/178400708_109384237942752_8398263078554551596_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=uy8Orym4GNwAX9fTvEm&_nc_ht=scontent.ftun3-1.fna&oh=acdb1a0f5c2b0fa3136087c1e06e511f&oe=60B8F788",

    width: 1,
    height: 1
  },
   {
    src:   "https://scontent.ftun3-1.fna.fbcdn.net/v/t1.6435-9/177924532_109384497942726_7357079383464627832_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=x5KJCcP31OYAX9kFnQw&_nc_ht=scontent.ftun3-1.fna&oh=c4f1a069f8faa66bc4dea71fd6b7b475&oe=60B79067",

    width: 1,
    height: 1
  },
   {
    src:   "https://scontent.ftun3-1.fna.fbcdn.net/v/t1.6435-9/180421674_110361687845007_5953539273492569650_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=L_07hhSiu2sAX_uj7nB&_nc_ht=scontent.ftun3-1.fna&oh=ace4e910bb337761c88a856339aba6d6&oe=60B9E00C",

    width: 1,
    height: 1
  },
   {
    src:   "https://scontent.ftun3-1.fna.fbcdn.net/v/t1.6435-9/179626007_110361717845004_4132238246979073480_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=_-I826H2DiIAX-JLLVi&_nc_ht=scontent.ftun3-1.fna&oh=62bbb203e43b42ed62083d7c98439b20&oe=60B6A1E2",

    width: 1,
    height: 1
  },
   {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/86731320_1522490894566920_8413668614481117184_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=fuKfLrYD8tgAX_OXIrD&_nc_ht=scontent.ftun7-1.fna&oh=fa2fc90605ad56cdac0a4605628035af&oe=60AA34B1",

    width: 1,
    height: 1
  },
   {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/157575299_5002341753173895_2145990236615951810_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=YncFqzh6u3cAX9WLXPk&_nc_ht=scontent.ftun7-1.fna&oh=bc6b9a618e9426b846c455104768d122&oe=60B6FB9A",

    width: 1,
    height: 1
  },
   {
    src:   "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.6435-9/158146050_5002342479840489_4996559357731258777_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=730e14&_nc_ohc=3JQ9zceA-ukAX8g8pu9&_nc_ht=scontent.ftun7-1.fna&oh=46ec369243253ca2c4074963598b5cd1&oe=60B92FB3",

    width: 1,
    height: 1
  }
  ];

const MyGallery = () => {
  return(
    <div>
    <div className='container'>
    <FacebookPlayer
                src="https://fb.watch/5ingrt6tlh/"
                
                primaryColor="red"
                width={650}
                height={600}
                // other props
            />
    
    <FacebookPlayer
                src="https://fb.watch/5ioVoogrfu/"
                
                primaryColor="red"
                width={650}
                height={600}
                // other props
            />
    </div>

    <ResponsiveGallery 
      useLightBox= {true}
      numOfImagesPerRow ={{xs: 1,s: 2,m: 3,l: 3,xl: 3 ,xxl:4}}
      images={photos}/>
    </div>
  ) 
}




export default MyGallery;

