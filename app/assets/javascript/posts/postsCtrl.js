angular.module('flapperNews')
.controller('PostsCtrl', [
    '$scope',
    'posts',
     'post',
    function($scope, posts, post){

        $scope.post = post;

        $scope.posts.push({
            title: $scope.title,
            link: $scope.link,
            upvotes: 0,
            comments: [
                {author: 'Joe', body: 'Cool post!', upvotes: 0},
                {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
            ]
        });

        $scope.addComment = function(){
            if($scope.body === '') { return; }
            posts.addComment(post.id, {
                body: $scope.body,
                author: 'user',
            }).success(function(comment) {
                $scope.post.comments.push(comment);
            });
            $scope.body = '';
        };

        $scope.incrementUpvotes = function(comment){
            posts.upvoteComment(post, comment);
        };

    }]);