$(function() {

	$('#search').click(function(){
		
		var username = $('#username').val();
		
		var Badge = Backbone.Model.extend({});
	 
		var BadgeList = Backbone.Collection.extend({
			model: Badge,
			url: 'https://coderwall.com/'+username+'.json?callback=?',
			parse: function(response) {				
				return response.data.badges;
			}
		});	

		var viewBadges = Backbone.View.extend({
			tagName: "ul",
			className: "badgeslist",
			initialize: function(){
				this.template = _.template( $("#template").html());
			},
			render: function () {
				$('#username').val('');
				$('#badges').html('');				
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
		
		$("#settings-view").removeClass('move-up');
		$("#settings-view").addClass('move-down');		
		
	});
	
});