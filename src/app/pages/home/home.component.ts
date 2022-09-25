import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isBuy : boolean = true;
  isSel : boolean = false;

  questions = [
    {
      title: "چرا مثلا که چی؟",
      visibleAnswer : false,
      answerTitle: "لورم اپسیوم ساختگی",
      answer: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
    },
    {
      title: "حال و آینده شناخت فراوان ",
      visibleAnswer : false,
      answerTitle: "لورم اپسیوم ساختگی",
      answer: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
    },
    {
      title: "بهبود ابزارهای کاربردی",
      visibleAnswer : false,
      answerTitle: "لورم اپسیوم ساختگی",
      answer: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
    },
    {
      title: "طراحان گرافیک",
      visibleAnswer : false,
      answerTitle: "لورم اپسیوم ساختگی",
      answer: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
    }
  ]

  selectBuy() {
    this.isBuy = true;
    this.isSel = false;
  }

  selectSel() {
    this.isSel = true;
    this.isBuy = false;
  }



  chartOptions = {
	  animationEnabled: true,
	  axisY: {
		valueFormatString: "#0,,.",
		suffix: "M"
	  },
	  data: [{
		type: "splineArea",
		color: "rgba(54,158,173,.7)",
		xValueFormatString: "YYYY",
		dataPoints: [
		  {x: new Date(2004,0), y: 2506000},     
		  {x: new Date(2005,0), y: 2798000},     
		  {x: new Date(2006,0), y: 3386000},     
		  {x: new Date(2007,0), y: 6944000},     
		  {x: new Date(2008,0), y: 6026000},     
		  {x: new Date(2009,0), y: 2394000},     
		  {x: new Date(2010,0), y: 1872000},     
		  {x: new Date(2011,0), y: 2140000},     
		  {x: new Date(2012,0), y: 7289000},     
		  {x: new Date(2013,0), y: 4830000},     
		  {x: new Date(2014,0), y: 2009000},     
		  {x: new Date(2015,0), y: 2840000},     
		  {x: new Date(2016,0), y: 2396000},     
		  {x: new Date(2017,0), y: 1613000},     
		  {x: new Date(2018,0), y: 2821000},     
		  {x: new Date(2019,0), y: 2000000},     
		  {x: new Date(2020,0), y: 1397000}    
		]
	  }]
	}


  openAnswer(index : number) {
    this.questions[index].visibleAnswer = this.questions[index].visibleAnswer == false ? true : false;
  }



}
