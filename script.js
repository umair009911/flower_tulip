TweenLite.defaultEase = Linear.easeNone;
const time = 3;
const d = 0.2;
const master = new TimelineMax({repeat:-1, yoyo:true, paused:true});

TweenMax.set(".flower, .leftleaf, .rightleaf", { transformOrigin:"center bottom"});

for (i = 1; i < 5; i++) {
  tl = new TimelineMax();
  tl.to("#tulip" + i + " .flower", time, {rotation: -20}, 0);
  tl.to("#tulip" + i + " .leftleaf", time, {rotation: 5}, 0);
  tl.to("#tulip" + i + " .rightleaf", time, {rotation: 5}, 0);
  tl.to(".stemStart" + i , time, {morphSVG:".stemEnd" + i}, 0);
  master.add(tl, (i-1) * d);
}

master.play();
