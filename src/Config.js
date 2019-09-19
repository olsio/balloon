const Config = {
  sizeIncrease: 2,
  maxPumps: [2, 2, 2, 2],
  earningScale: [
    1, // '1' = 1
    1, // '2' = 2
    2, // '3' = 4
    3, // '4' = 7
    4, // '5' = 11
    6, // '6' = 17
    8, // '7' = 25
    10 // '8' = 35
  ],
  balloons: [
    require('./images/balloon_0.png'),
    require('./images/balloon_1.png'),
    require('./images/balloon_2.png'),
    require('./images/balloon_3.png'),
    require('./images/balloon_4.png'),
    require('./images/balloon_5.png'),
    require('./images/balloon_6.png'),
    require('./images/balloon_7.png')
  ]
}

export default Config
