$(function() {

	var Badge = Backbone.Model.extend({});
	 
	var BadgeList = Backbone.Collection.extend({
		model: Badge,
		url: 'https://coderwall.com/marti1125.json?callback=?',
		parse: function(response) {				
			return response;
		}
	});	

	var viewBadges = Backbone.View.extend({
		el: "#badges",
		initialize: function(){
            this.render();
        },
        render: function () {           
            var template = _.template( $("#template").html(), {} );
    		this.$el.html(this.template,(this.model.toJSON()));
    		return this;
        }
	});
	
	var badgeList = new BadgeList();
	var badgeView = new viewBadges({model: badgeList});	
	badgeList.fetch();
	badgeList.bind('reset', function () {
        badgeView.render();
    });    

});