var d3 = window.d3;
var cloud = d3.layout.cloud;

d3.text("/d3/dream.txt").then((words) => {
  var stopwords = new Set(
    "i,me,my,myself,we,us,our,ours,ourselves,you,your,yours,yourself,yourselves,he,him,his,himself,she,her,hers,herself,it,its,itself,they,them,their,theirs,themselves,what,which,who,whom,whose,this,that,these,those,am,is,are,was,were,be,been,being,have,has,had,having,do,does,did,doing,will,would,should,can,could,ought,i'm,you're,he's,she's,it's,we're,they're,i've,you've,we've,they've,i'd,you'd,he'd,she'd,we'd,they'd,i'll,you'll,he'll,she'll,we'll,they'll,isn't,aren't,wasn't,weren't,hasn't,haven't,hadn't,doesn't,don't,didn't,won't,wouldn't,shan't,shouldn't,can't,cannot,couldn't,mustn't,let's,that's,who's,what's,here's,there's,when's,where's,why's,how's,a,an,the,and,but,if,or,because,as,until,while,of,at,by,for,with,about,against,between,into,through,during,before,after,above,below,to,from,up,upon,down,in,out,on,off,over,under,again,further,then,once,here,there,when,where,why,how,all,any,both,each,few,more,most,other,some,such,no,nor,not,only,own,same,so,than,too,very,say,says,said,shall".split(
      ","
    )
  );
  words = words
    .trim()
    .split(/[\s.]+/g)
    .map((w) => w.replace(/^[“‘"\-—()[\]{}]+/g, ""))
    .map((w) => w.replace(/[;:.!?()[\]{},"'’”\-—]+$/g, ""))
    .map((w) => w.replace(/['’]s$/g, ""))
    .map((w) => w.substring(0, 30))
    .map((w) => w.toLowerCase())
    .filter((w) => w && !stopwords.has(w));

  // console.log(d3.rollups(words,
  //   (group) => group.length,
  //   (w) => w
  // ).sort(([, a], [, b]) => d3.descending(a, b))
  // .slice(0, 250)
  // .map(([text, value]) => ({ text, value })));
  var fontFamily = "sans-serif";
  var fontScale = 15;
  var padding = 0;
  var height = 500;
  var width = 700;
  const rotate = () => 0; // () => (~~(Math.random() * 6) - 3) * 30

  var data = d3
    .rollups(
      words,
      (group) => group.length,
      (w) => w
    )
    .sort(([, a], [, b]) => d3.descending(a, b))
    .slice(0, 250)
    .map(([text, value]) => ({ text, value }));
  console.log(data);

  const svg = d3
    .select("#word-cloud-div")
    .append("svg")
    .attr("height", height)
    .attr("width", width)
    .attr("font-family", fontFamily)
    .attr("text-anchor", "middle");

  const w_cloud = cloud()
    .size([width, height])
    .words(data.map((d) => Object.create(d)))
    .padding(padding)
    .rotate(rotate)
    .font(fontFamily)
    .fontSize((d) => Math.sqrt(d.value) * fontScale)
    .on("word", ({ size, x, y, rotate, text }) => {
      svg
        .append("text")
        .attr("font-size", size)
        .attr("transform", `translate(${x},${y}) rotate(${rotate})`)
        .text(text);
    });

  w_cloud.start();
});