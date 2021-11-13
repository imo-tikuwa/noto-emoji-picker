# noto-emoji-picker

![yellowBlobPicker](image-for-github.png)

## Usage
1. Load `jquery.yellow-blob-picker.css` in the head.
```html
<link rel="stylesheet" href="css/jquery.yellow-blob-picker.css">
```

2. Load `jquery.yellow-blob-picker.js` after loading jquery.
```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="js/jquery.yellow-blob-picker.js"></script>
```

3. Call yellowBlobPicker().
```html
<input type="text" id="icon-picker" name="picker1" />
```
```javascript
<script type="text/javascript">
  $('#icon-picker').yellowBlobPicker();
</script>
```

## Options
The icon picker itself uses the [fontIconPicker](https://github.com/fontIconPicker/fontIconPicker) plugin.  
Therefore, among the options of the fontIconPicker plugin, options other than "source" and "iconGenerator" can be used as they are.

