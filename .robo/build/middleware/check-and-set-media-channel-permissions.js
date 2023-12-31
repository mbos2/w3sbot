export default async function(data) {
    const [interaction] = data.payload;
    const { key, module, type } = data.record;
    if (interaction && type === 'event' && key === 'messageCreate' && data.record) {
        interaction['record'] = data.record;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFx3M2JvdFxcc3JjXFxtaWRkbGV3YXJlXFxjaGVjay1hbmQtc2V0LW1lZGlhLWNoYW5uZWwtcGVybWlzc2lvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKGRhdGEpIHtcclxuICBjb25zdCBbaW50ZXJhY3Rpb25dID0gZGF0YS5wYXlsb2FkXHJcbiAgY29uc3QgeyBrZXksIG1vZHVsZSwgdHlwZSB9ID0gZGF0YS5yZWNvcmRcclxuXHJcbiAgaWYoaW50ZXJhY3Rpb24gJiYgdHlwZSA9PT0gJ2V2ZW50JyAmJiBrZXkgPT09ICdtZXNzYWdlQ3JlYXRlJyAmJiBkYXRhLnJlY29yZCkge1xyXG4gICAgaW50ZXJhY3Rpb25bJ3JlY29yZCddID0gZGF0YS5yZWNvcmQ7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJkYXRhIiwiaW50ZXJhY3Rpb24iLCJwYXlsb2FkIiwia2V5IiwibW9kdWxlIiwidHlwZSIsInJlY29yZCJdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxlQUFnQkEsSUFBSTtJQUNqQyxNQUFNLENBQUNDLFlBQVksR0FBR0QsS0FBS0UsT0FBTztJQUNsQyxNQUFNLEVBQUVDLEdBQUcsRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0wsS0FBS00sTUFBTTtJQUV6QyxJQUFHTCxlQUFlSSxTQUFTLFdBQVdGLFFBQVEsbUJBQW1CSCxLQUFLTSxNQUFNLEVBQUU7UUFDNUVMLFdBQVcsQ0FBQyxTQUFTLEdBQUdELEtBQUtNLE1BQU07SUFDckM7QUFDRiJ9