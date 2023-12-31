import "dotenv/config";
import { load } from "cheerio";
export const config = {
    description: 'Sends a random meme from programmerhumor.io'
};
export default (async (event)=>{
    const requestUrl = "https://programmerhumor.io/?bimber_random_post=true";
    try {
        const response = await fetch(requestUrl);
        const $ = load(await response.text());
        const ogImage = $('meta[property="og:image"]').attr("content");
        console.log(response);
        console.log(ogImage);
        return ogImage;
    } catch (error) {
        console.error("Error:", error.message);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFx3M2JvdFxcc3JjXFxtb2R1bGVzXFxtZW1lc1xcY29tbWFuZHNcXHJtZW1lLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnZG90ZW52L2NvbmZpZydcclxuaW1wb3J0IHR5cGUgeyBDb21tYW5kQ29uZmlnIH0gZnJvbSAnQHJvYm9wbGF5L3JvYm8uanMnXHJcbmltcG9ydCB7bG9hZH0gZnJvbSAnY2hlZXJpbyc7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnOiBDb21tYW5kQ29uZmlnID0ge1xyXG4gIGRlc2NyaXB0aW9uOiAnU2VuZHMgYSByYW5kb20gbWVtZSBmcm9tIHByb2dyYW1tZXJodW1vci5pbycsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChldmVudCkgPT4ge1xyXG4gIGNvbnN0IHJlcXVlc3RVcmwgPSBcImh0dHBzOi8vcHJvZ3JhbW1lcmh1bW9yLmlvLz9iaW1iZXJfcmFuZG9tX3Bvc3Q9dHJ1ZVwiO1xyXG4gIFxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3RVcmwpO1xyXG4gICAgY29uc3QgJCA9IGxvYWQoYXdhaXQgcmVzcG9uc2UudGV4dCgpKTtcclxuICAgIGNvbnN0IG9nSW1hZ2UgPSAkKCdtZXRhW3Byb3BlcnR5PVwib2c6aW1hZ2VcIl0nKS5hdHRyKFwiY29udGVudFwiKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgY29uc29sZS5sb2cob2dJbWFnZSlcclxuICAgIHJldHVybiBvZ0ltYWdlO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJsb2FkIiwiY29uZmlnIiwiZGVzY3JpcHRpb24iLCJldmVudCIsInJlcXVlc3RVcmwiLCJyZXNwb25zZSIsImZldGNoIiwiJCIsInRleHQiLCJvZ0ltYWdlIiwiYXR0ciIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sZ0JBQWU7QUFFdEIsU0FBUUEsSUFBSSxRQUFPLFVBQVU7QUFFN0IsT0FBTyxNQUFNQyxTQUF3QjtJQUNuQ0MsYUFBYTtBQUNmLEVBQUM7QUFFRCxlQUFlLENBQUEsT0FBT0M7SUFDcEIsTUFBTUMsYUFBYTtJQUVuQixJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNRjtRQUM3QixNQUFNRyxJQUFJUCxLQUFLLE1BQU1LLFNBQVNHLElBQUk7UUFDbEMsTUFBTUMsVUFBVUYsRUFBRSw2QkFBNkJHLElBQUksQ0FBQztRQUNwREMsUUFBUUMsR0FBRyxDQUFDUDtRQUNaTSxRQUFRQyxHQUFHLENBQUNIO1FBQ1osT0FBT0E7SUFDVCxFQUFFLE9BQU9JLE9BQU87UUFDZEYsUUFBUUUsS0FBSyxDQUFDLFVBQVVBLE1BQU1DLE9BQU87SUFDdkM7QUFDRixDQUFBLEVBQUMifQ==