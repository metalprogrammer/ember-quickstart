import Ember from 'ember';


export default Ember.Controller.extend({

  graphdata: Ember.computed("model",function(){
			var r =Math.random(0,256).toString()
			var g =Math.random(0,256)
			var b =Math.random(0,256)
			var rgba = "rgba(" + r + "," + g + "," + b + ",1)"
			return {
				labels: this.get("model.listofdata").mapBy("date"),
				datasets: [
					{
						label: "Stock Data",
						fill: false,
						lineTension: 0.1,
						backgroundColor: rgba,
						borderColor: "rgba(75,192,192,1)",
						borderCapStyle: 'butt',
						borderDash: [],
						borderDashOffset: 0.0,
						borderJoinStyle: 'miter',
						pointBorderColor: "rgba(75,192,192,1)",
						pointBackgroundColor: "#fff",
						pointBorderWidth: 1,
						pointHoverRadius: 5,
						pointHoverBackgroundColor: "rgba(75,192,192,1)",
						pointHoverBorderColor: rgba,
						pointHoverBorderWidth: 2,
						pointRadius: 1,
						pointHitRadius: 10,
						data: this.get("model.listofdata").mapBy("average"),
					}
				]
			};
		})
});