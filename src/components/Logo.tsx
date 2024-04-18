import { spawn } from "child_process";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="w-28">
      <Image
        src="/assets/images/logo.png"
        alt="logo"
        width={120}
        height={36}
        className="h-full w-full"
      />
    </div>

    //     <svg
    //       className="h-10"
    //       version="1.1"
    //       id="Layer_1"
    //       x="0px"
    //       y="0px"
    //       width="100%"
    //       viewBox="0 0 496 496"
    //       enable-background="new 0 0 496 496"
    //     >
    //       <path
    //         fill="#000000"
    //         opacity="1.000000"
    //         stroke="none"
    //         d="
    // M363.291260,275.274261
    // 	C356.447723,256.310852 348.034698,237.988159 340.398621,219.348633
    // 	C335.034393,206.254807 329.248718,193.333160 323.595245,180.359024
    // 	C322.952972,178.885025 322.480713,177.214508 320.842255,176.190948
    // 	C320.494293,176.505692 319.956146,176.753418 319.842590,177.129379
    // 	C313.312286,198.750748 301.341339,217.652527 289.983002,236.853394
    // 	C281.248657,251.618546 272.105164,266.156128 265.704742,282.172791
    // 	C263.487091,287.722351 259.072266,284.642120 255.162140,285.083405
    // 	C255.573227,280.131500 258.192230,276.591003 260.200867,272.848724
    // 	C269.124969,256.222290 280.608734,241.226471 290.630219,225.297211
    // 	C298.441620,212.880905 305.891083,200.262253 311.913483,186.858093
    // 	C313.071777,184.280090 314.136475,181.648605 315.056915,178.977203
    // 	C318.617126,168.644379 318.588867,168.634369 329.845367,168.624969
    // 	C331.511841,168.623566 333.179260,168.589020 334.844604,168.632980
    // 	C350.255219,169.039917 346.185272,165.866348 352.218201,180.165146
    // 	C366.264221,213.456039 380.036652,246.862366 393.912262,280.225098
    // 	C394.475616,281.579620 395.350800,282.866333 395.018707,285.177429
    // 	C386.471313,285.177429 377.887085,285.549255 369.364105,284.989136
    // 	C366.088043,284.773865 366.511536,280.098419 364.286377,277.372711
    // 	C363.763458,276.322266 363.527344,275.798279 363.291260,275.274261
    // z"
    //       />
    //       <path
    //         fill="#000000"
    //         opacity="1.000000"
    //         stroke="none"
    //         d="
    // M191.820938,233.289246
    // 	C198.983978,250.476776 205.979507,267.319977 213.424423,285.245178
    // 	C203.966797,285.245178 195.582565,285.286346 187.199280,285.215698
    // 	C185.150330,285.198456 184.614441,283.361420 183.980881,281.835693
    // 	C171.928558,252.811111 159.988647,223.739243 147.782181,194.779709
    // 	C144.187210,186.250748 139.844757,178.036865 135.354446,168.653793
    // 	C142.861374,168.653793 149.740753,168.557877 156.616364,168.677780
    // 	C165.437668,168.831635 164.183533,166.891449 168.105911,176.286758
    // 	C175.985275,195.160202 183.807571,214.057465 191.820938,233.289246
    // z"
    //       />
    //       <path
    //         fill="#000000"
    //         opacity="1.000000"
    //         stroke="none"
    //         d="
    // M269.000946,317.649689
    // 	C283.406464,317.649597 297.312164,317.649597 311.959869,317.649597
    // 	C310.390411,321.676270 307.579742,323.333801 305.312744,325.304535
    // 	C296.346558,333.098999 286.695099,339.455322 273.998108,338.303040
    // 	C264.020477,337.397552 256.236481,333.071747 251.784882,323.730286
    // 	C251.288513,322.688721 250.931839,321.565094 250.646072,320.444885
    // 	C250.489838,319.832458 250.618164,319.147400 250.618164,317.649780
    // 	C256.652191,317.649780 262.576660,317.649780 269.000946,317.649689
    // z"
    //       />
    //       <path
    //         fill="#000000"
    //         opacity="1.000000"
    //         stroke="none"
    //         d="
    // M218.311432,201.437256
    // 	C227.047913,199.886826 233.406418,194.787384 239.581955,189.428391
    // 	C243.471603,186.053024 247.174774,182.463531 251.032181,179.049850
    // 	C252.339127,177.893265 253.491806,176.292725 256.165375,176.531860
    // 	C256.165375,186.103699 257.047272,195.771011 255.906235,205.193344
    // 	C254.859039,213.840958 237.036163,220.744003 229.284439,216.131226
    // 	C223.560287,212.724945 219.468765,207.444077 215.045853,202.863251
    // 	C215.922562,201.105011 217.072784,201.700516 218.311432,201.437256
    // z"
    //       />
    //       <path
    //         fill="#000000"
    //         opacity="1.000000"
    //         stroke="none"
    //         d="
    // M362.970459,275.081909
    // 	C363.527344,275.798279 363.763458,276.322266 364.076416,277.136841
    // 	C357.823975,279.341125 351.288574,280.681824 345.771332,284.733307
    // 	C344.836670,285.419647 343.208282,285.307800 341.899170,285.314240
    // 	C332.802124,285.359192 323.704803,285.337982 314.157440,284.468292
    // 	C321.810394,276.473022 326.812805,265.964294 338.482574,262.657166
    // 	C344.033783,261.084015 348.658051,263.035156 352.841309,266.399597
    // 	C356.208649,269.107849 359.387268,272.050751 362.970459,275.081909
    // z"
    //       />
    //       <path
    //         fill="#000000"
    //         opacity="1.000000"
    //         stroke="none"
    //         d="
    // M239.825836,328.848755
    // 	C237.242065,338.370300 237.242065,338.373901 227.897522,338.388031
    // 	C222.408600,338.396332 216.917923,338.310242 211.431427,338.426605
    // 	C208.765442,338.483154 207.116241,337.598328 206.122696,334.990662
    // 	C204.170868,329.867920 201.944702,324.850037 199.882446,319.768341
    // 	C199.719940,319.367889 199.949158,318.808502 200.049698,317.773529
    // 	C208.482178,317.773529 216.914948,317.742035 225.347168,317.796265
    // 	C227.385742,317.809387 227.959457,319.614502 228.696442,321.078552
    // 	C230.410477,324.483643 232.081757,327.910248 233.995804,331.784454
    // 	C237.571594,327.325317 235.825073,319.808868 243.080124,317.189240
    // 	C243.332016,322.050598 240.690857,324.996124 239.825836,328.848755
    // z"
    //       />
    //       <path
    //         fill="#000000"
    //         opacity="1.000000"
    //         stroke="none"
    //         d="
    // M392.491455,338.325256
    // 	C391.319092,337.950745 390.182953,337.793335 389.929657,337.235229
    // 	C387.141632,331.091705 384.490967,324.885834 381.388245,317.741730
    // 	C391.025757,317.741730 399.464600,317.731506 407.903351,317.754639
    // 	C408.962341,317.757538 409.812714,318.272858 410.317505,319.251953
    // 	C413.415619,325.260925 416.512146,331.270721 420.163788,338.356323
    // 	C410.415161,338.356323 401.676422,338.356323 392.491455,338.325256
    // z"
    //       />
    //       <path
    //         fill="#000000"
    //         opacity="1.000000"
    //         stroke="none"
    //         d="
    // M194.190674,295.720856
    // 	C192.433151,299.666809 190.825638,303.322479 189.207382,306.973358
    // 	C188.459396,308.660828 187.798050,310.356140 185.408188,310.293030
    // 	C183.250427,310.235992 182.625763,308.683655 182.031158,307.146973
    // 	C179.954742,301.780762 176.808502,296.829376 175.075272,290.056519
    // 	C183.226624,291.209961 181.475845,299.200043 185.848480,302.512726
    // 	C187.744507,300.191650 188.707611,297.222015 189.873871,294.405945
    // 	C190.899521,291.929382 192.136032,290.017151 195.200989,290.015900
    // 	C197.922897,290.014771 200.020187,290.787598 201.340485,293.386047
    // 	C202.153244,294.985657 203.335403,296.397522 204.348343,297.888702
    // 	C208.184601,296.302399 207.599045,289.642365 213.291092,290.469177
    // 	C213.886688,293.517639 211.790375,295.099792 210.712402,297.015167
    // 	C208.916000,300.207031 206.754471,303.166687 207.054993,307.138153
    // 	C207.175476,308.730225 206.563553,310.191528 204.564819,310.162262
    // 	C202.528885,310.132385 202.099182,308.534790 202.165421,307.019073
    // 	C202.363159,302.494141 199.702896,299.183685 197.583252,295.641144
    // 	C196.673660,294.120972 195.564468,293.239502 194.190674,295.720856
    // z"
    //       />
    //       <path
    //         fill="#000000"
    //         opacity="1.000000"
    //         stroke="none"
    //         d="
    // M293.173035,294.122192
    // 	C294.299652,296.163666 294.868561,298.246643 293.802551,299.700134
    // 	C291.324890,303.078369 291.534668,306.246460 293.847870,309.454590
    // 	C290.760345,311.221069 289.253815,309.492126 287.748291,307.566528
    // 	C285.526123,304.724335 283.346161,303.710205 281.760681,308.080780
    // 	C281.240173,309.515747 280.517303,310.376740 278.887238,310.128326
    // 	C277.138458,309.861908 276.915009,308.493958 276.907166,307.159241
    // 	C276.879883,302.519867 276.929169,297.879730 276.989807,293.240387
    // 	C277.012573,291.496826 277.961090,290.365295 279.693787,290.260620
    // 	C284.490479,289.971008 289.393280,289.430359 293.173035,294.122192
    // M283.970825,294.397980
    // 	C280.606262,294.861725 281.252686,297.306946 281.849609,299.291656
    // 	C282.487946,301.413879 284.551025,300.740448 286.107727,300.634094
    // 	C287.930573,300.509521 289.503052,299.488159 289.374329,297.595703
    // 	C289.189941,294.884644 287.020599,294.332977 283.970825,294.397980
    // z"
    //       />
    //       <path
    //         fill="#000000"
    //         opacity="1.000000"
    //         stroke="none"
    //         d="
    // M269.543274,296.608704
    // 	C271.480255,301.034973 273.243256,305.127228 275.086426,309.405609
    // 	C270.066956,312.173828 269.036652,305.479401 264.461731,305.773010
    // 	C260.249817,306.043304 259.052460,311.677246 253.762390,309.451660
    // 	C256.462677,303.500031 258.844147,297.546661 261.857422,291.932343
    // 	C263.192566,289.444702 265.730621,289.559357 267.386353,292.246552
    // 	C268.167877,293.514984 268.715607,294.927521 269.543274,296.608704
    // z"
    //       />
    //       <path
    //         fill="#000000"
    //         opacity="1.000000"
    //         stroke="none"
    //         d="
    // M236.055786,303.842743
    // 	C236.062561,301.211761 236.029907,299.049774 236.082214,296.889801
    // 	C236.162781,293.563293 235.727127,290.109894 240.875290,289.975494
    // 	C248.225113,289.783630 252.584503,291.870789 253.221420,296.499908
    // 	C253.805954,300.748077 251.525696,303.661194 246.515457,304.781311
    // 	C243.962128,305.352142 241.087265,305.148834 240.698471,308.873474
    // 	C240.583527,309.974640 239.373367,310.232300 238.306961,310.155670
    // 	C237.148300,310.072510 236.472061,309.359039 236.325775,308.279144
    // 	C236.148270,306.968781 236.137405,305.635803 236.055786,303.842743
    // M243.577377,294.408081
    // 	C240.532318,294.834442 240.996338,297.162262 241.419922,299.007477
    // 	C241.925552,301.210236 243.981934,300.727112 245.586945,300.563232
    // 	C247.252716,300.393158 248.490280,299.371674 248.467056,297.662933
    // 	C248.431793,295.068420 246.480392,294.502380 243.577377,294.408081
    // z"
    //       />
    //       <path
    //         fill="#000000"
    //         opacity="1.000000"
    //         stroke="none"
    //         d="
    // M231.812698,310.178467
    // 	C225.971664,302.682343 220.111740,307.239136 214.072021,310.236603
    // 	C215.619324,303.228546 218.360733,297.418915 221.504196,291.864136
    // 	C222.987900,289.242249 225.610321,289.592773 226.979965,292.292969
    // 	C229.458466,297.179352 231.616486,302.229492 233.863586,307.231384
    // 	C234.612259,308.897858 234.472122,310.201569 231.812698,310.178467
    // M225.041336,302.100281
    // 	C227.350540,299.721771 224.788864,298.673370 223.756042,297.188446
    // 	C223.601471,298.903503 219.486237,301.244293 225.041336,302.100281
    // z"
    //       />
    //       <path
    //         fill="#000000"
    //         opacity="1.000000"
    //         stroke="none"
    //         d="
    // M463.786255,291.826691
    // 	C464.019470,296.776855 464.622986,301.362762 463.207123,306.550873
    // 	C458.283661,304.222382 456.735596,299.400452 452.966644,296.388794
    // 	C451.334686,299.342316 453.453217,302.945099 450.731598,305.656006
    // 	C449.384857,300.652557 449.389313,295.622559 450.241730,290.088776
    // 	C455.202026,291.701172 456.087616,296.932251 460.080933,298.797028
    // 	C461.447845,296.706512 460.426727,294.457306 460.950104,292.438171
    // 	C461.352142,290.887024 461.759338,289.068329 463.786255,291.826691
    // z"
    //       />
    //       <path
    //         fill="#000000"
    //         opacity="1.000000"
    //         stroke="none"
    //         d="
    // M320.170380,299.083557
    // 	C319.590332,298.077911 319.213745,297.329803 318.624969,296.160156
    // 	C316.079987,299.787994 318.504791,303.489960 314.983978,306.780029
    // 	C313.511627,300.754578 313.607300,295.709320 314.965454,290.023346
    // 	C319.840393,292.157471 320.945282,297.315857 325.131348,299.739471
    // 	C326.319763,296.800262 324.959320,293.466949 327.012939,290.827728
    // 	C328.996124,295.769806 328.265778,300.724854 328.025665,306.152954
    // 	C323.607361,305.092468 322.587189,301.564545 320.170380,299.083557
    // z"
    //       />
    //       <path
    //         fill="#000000"
    //         opacity="1.000000"
    //         stroke="none"
    //         d="
    // M301.564087,293.615784
    // 	C302.473846,292.054962 302.709351,290.358612 305.193756,290.052734
    // 	C308.387146,294.661896 310.326111,300.003540 311.869293,305.837067
    // 	C306.646606,300.439667 301.921844,301.230988 296.746826,307.014648
    // 	C297.066803,301.296814 299.865265,297.848785 301.564087,293.615784
    // z"
    //       />
    //       <path
    //         fill="#000000"
    //         opacity="1.000000"
    //         stroke="none"
    //         d="
    // M406.269470,290.155029
    // 	C412.622528,292.663086 414.712311,296.951599 412.327972,301.843475
    // 	C410.459595,305.676727 403.014465,308.099976 399.181763,306.211151
    // 	C397.866089,305.562744 397.755280,304.485260 397.723511,303.320221
    // 	C397.669128,301.324341 397.670593,299.326599 397.668793,297.329651
    // 	C397.661591,289.372650 397.683411,289.355835 406.269470,290.155029
    // M408.807709,294.623169
    // 	C406.553009,292.712128 403.567505,290.910004 401.379211,293.289825
    // 	C399.129883,295.736084 399.504242,299.850555 401.033752,302.601044
    // 	C402.382477,305.026459 405.520508,303.979980 407.682739,302.684692
    // 	C410.754669,300.844452 411.417572,298.250824 408.807709,294.623169
    // z"
    //       />
    //       <path
    //         fill="#000000"
    //         opacity="1.000000"
    //         stroke="none"
    //         d="
    // M343.023804,294.490356
    // 	C343.260773,292.845703 342.997528,291.364227 345.235565,290.634369
    // 	C346.610138,295.230499 347.033417,299.733093 344.553406,303.930115
    // 	C342.197388,307.917358 335.444061,307.580688 333.217804,303.394043
    // 	C331.032867,299.285217 331.410156,294.922607 332.552063,290.128052
    // 	C335.338074,291.298401 334.997040,293.236511 335.102692,294.917358
    // 	C335.206879,296.574646 335.150513,298.242798 335.275726,299.897766
    // 	C335.446503,302.155090 336.451630,303.724213 338.978943,303.677765
    // 	C341.128815,303.638275 342.311890,302.404205 342.714355,300.366638
    // 	C342.842560,299.717529 342.898773,299.048981 342.927979,298.386688
    // 	C342.979218,297.224609 342.984192,296.060486 343.023804,294.490356
    // z"
    //       />
    //       <path
    //         fill="#000000"
    //         opacity="1.000000"
    //         stroke="none"
    //         d="
    // M387.594086,297.187622
    // 	C388.449341,298.179779 389.096405,298.915802 389.946411,299.882660
    // 	C391.737335,296.872406 389.542236,293.371735 392.708771,289.439697
    // 	C393.780029,295.642944 393.390564,300.586639 393.047882,306.321167
    // 	C387.954407,304.127563 386.521637,299.217773 382.859467,296.417572
    // 	C381.395599,299.382477 383.448395,303.012512 380.522705,306.653900
    // 	C378.996155,300.718933 379.955353,295.779907 379.691986,290.532959
    // 	C384.215973,291.068604 385.000671,294.935150 387.594086,297.187622
    // z"
    //       />
    //       <path
    //         fill="#000000"
    //         opacity="1.000000"
    //         stroke="none"
    //         d="
    // M415.666260,301.708374
    // 	C416.189575,297.702271 414.569733,293.840302 416.923248,290.196991
    // 	C419.352356,292.151215 416.957764,296.573792 421.888763,296.820374
    // 	C427.117310,297.081848 426.648529,293.002869 427.847839,289.807312
    // 	C430.726624,293.778229 430.833160,302.182648 428.275024,306.197693
    // 	C426.197876,303.641266 427.420746,298.214539 421.427948,299.219727
    // 	C416.886414,299.981415 419.398865,303.944672 417.391022,305.641693
    // 	C415.144714,305.292297 415.964813,303.446289 415.666260,301.708374
    // z"
    //       />
    //       <path
    //         fill="#000000"
    //         opacity="1.000000"
    //         stroke="none"
    //         d="
    // M436.479950,303.296875
    // 	C435.009155,304.220795 434.624695,306.144653 432.018158,305.707489
    // 	C433.902954,299.985901 436.015106,294.682892 439.800385,289.172974
    // 	C444.275421,294.415344 445.398743,300.240173 447.662811,305.813232
    // 	C444.068848,303.983429 441.057922,300.921021 436.479950,303.296875
    // M440.965302,299.348053
    // 	C442.302887,297.456635 441.346832,296.254578 439.894440,294.960632
    // 	C437.869385,298.605255 437.869385,298.605255 440.965302,299.348053
    // z"
    //       />
    //       <path
    //         fill="#000000"
    //         opacity="1.000000"
    //         stroke="none"
    //         d="
    // M374.278381,304.578735
    // 	C369.502655,299.933258 365.922150,302.760651 361.975098,305.957733
    // 	C363.093445,300.026611 365.803619,295.043793 369.073578,289.245300
    // 	C373.475861,294.036041 375.269043,299.393341 377.096588,304.430664
    // 	C378.017151,306.967987 375.696960,306.070282 374.278381,304.578735
    // M367.723419,297.947327
    // 	C367.953156,300.297821 369.859589,300.246521 370.767731,299.215607
    // 	C372.338318,297.432709 370.730743,296.217194 369.073853,294.898834
    // 	C368.565918,295.967163 368.229492,296.674774 367.723419,297.947327
    // z"
    //       />
    //       <path
    //         fill="#000000"
    //         opacity="1.000000"
    //         stroke="none"
    //         d="
    // M351.168274,290.910400
    // 	C354.440826,289.288910 357.115265,289.516022 359.727325,291.555023
    // 	C359.300171,292.187408 359.168060,292.619720 358.951050,292.667633
    // 	C356.850403,293.131409 353.566406,290.903290 352.811584,293.920563
    // 	C352.057068,296.936707 355.704956,296.839508 357.645508,297.735809
    // 	C359.789062,298.725800 361.525024,300.000946 360.953857,302.587128
    // 	C360.438446,304.921051 358.729034,306.320770 356.275208,306.338806
    // 	C353.753662,306.357391 350.963470,306.944458 348.926758,303.986542
    // 	C351.826447,302.037720 355.855835,305.963348 357.978699,301.780060
    // 	C356.247040,297.810364 344.727112,300.171631 351.168274,290.910400
    // z"
    //       />
    //       <path
    //         fill="#000000"
    //         opacity="1.000000"
    //         stroke="none"
    //         d="
    // M339.205750,336.020996
    // 	C337.577728,339.172760 335.290924,338.721191 333.199615,337.456665
    // 	C331.633545,336.509735 331.367645,334.690674 332.022644,332.991150
    // 	C332.802246,330.968262 334.567078,330.503723 336.524445,330.656006
    // 	C339.887726,330.917755 338.776215,333.713531 339.205750,336.020996
    // z"
    //       />
    //       <path
    //         fill="#000000"
    //         opacity="1.000000"
    //         stroke="none"
    //         d="
    // M304.880493,333.414001
    // 	C305.334564,331.437073 306.319061,330.543549 307.662994,331.920135
    // 	C309.270111,333.566223 310.228668,331.565063 311.746399,331.531189
    // 	C312.597839,333.573242 312.540619,335.547363 311.578735,337.817719
    // 	C309.579559,337.746246 307.678192,335.031036 305.980804,337.715820
    // 	C304.491699,336.422058 304.850311,335.052887 304.880493,333.414001
    // z"
    //       />
    //       <path
    //         fill="#000000"
    //         opacity="1.000000"
    //         stroke="none"
    //         d="
    // M321.803711,337.388123
    // 	C320.122772,338.805695 318.541107,338.509338 316.940277,337.982941
    // 	C317.316681,331.086151 317.316681,331.086151 320.834381,330.802643
    // 	C320.447266,333.051178 322.557098,334.739624 321.803711,337.388123
    // z"
    //       />
    //       <path
    //         fill="#000000"
    //         opacity="1.000000"
    //         stroke="none"
    //         d="
    // M350.133972,336.753784
    // 	C348.094696,336.977173 345.749878,333.375305 344.748688,338.607056
    // 	C342.278198,335.636414 342.836273,333.450104 344.190094,330.474457
    // 	C345.902710,333.723358 347.745636,335.122162 349.416809,330.798950
    // 	C350.819366,332.904144 350.205261,334.710724 350.133972,336.753784
    // z"
    //       />
    //       <path
    //         fill="#000000"
    //         opacity="1.000000"
    //         stroke="none"
    //         d="
    // M369.074219,336.847198
    // 	C367.768219,338.936523 366.108398,338.325104 364.154236,337.911163
    // 	C367.807831,336.693451 359.729248,330.127991 368.352203,330.918610
    // 	C366.529236,333.270264 369.108948,334.574310 369.074219,336.847198
    // z"
    //       />
    //     </svg>
  );
}
