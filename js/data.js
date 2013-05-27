$(function() {

	var Badge = Backbone.Model.extend({});
	 
	var BadgeList = Backbone.Collection.extend({
		model: Badge,
		url: 'https://coderwall.com/marti1125.json?callback=?',
		parse: function(response) {				
			return response.badges;
		}
	});	

	var viewBadges = Backbone.View.extend({			
		initialize: function(){
            this.template = _.template( $("#template").val());
        },
        render: function () { 
    		this.$el.html(this.template({badge: this.model.toJSON()}));
    		return this;
        }
	});
	
	var badgeList = new BadgeList();
	var badgeView = new viewBadges({model: badgeList});		
	badgeList.bind('reset', function () {
		$("#badges").append(badgeView.render().$el);
    }); 
	badgeList.fetch({reset: true});

});