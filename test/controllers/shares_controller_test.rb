require "test_helper"

class SharesControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get shares_new_url
    assert_response :success
  end
end
