import Ember from 'ember';


export default Ember.Controller.extend({

  graphdata: Ember.computed("model",function(){
			var r =Math.random(0,256).toString();
			var g =Math.random(0,256).toString();
			var b =Math.random(0,256).toString();
			var rgbaz = "(" + r + "," + g + "," + b + ",1)"
			return {
				labels: this.get("model.listofdata").mapBy("date"),
				datasets: [
					{
						label: "Stock Data",
						fill: true,
   
						data: this.get("model.listofdata").mapBy("average"),
					}
				]
			};
		})
});