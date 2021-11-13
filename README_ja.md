# noto-emoji-picker

![yellowBlobPicker](image-for-github.png)

## 使い方
1. &lt;head&gt;内に`jquery.yellow-blob-picker.css`の読み込みを追加する。
```html
<link rel="stylesheet" href="css/jquery.yellow-blob-picker.css">
```

2. jqueryの読み込み後に`jquery.yellow-blob-picker.js`の読み込みを追加する。
```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="js/jquery.yellow-blob-picker.js"></script>
```

3. アイコンピッカーを表示したい要素から`yellowBlobPicker`関数を呼び出す。
```html
<input type="text" id="icon-picker" name="picker1" />
```
```javascript
<script type="text/javascript">
  $('#icon-picker').yellowBlobPicker();
</script>
```

### アイコンピッカー外へのアイコン表示について
`$.createYellowBlobIcon`関数を使用して、任意の要素内に黄色スライムくんを表示できます。
```javascript
<script type="text/javascript">
  let icon = 'android5-u1f60a';
  $('.display-icon').html($.createYellowBlobIcon(icon));
</script>
```

### サンプル
アイコンピッカーを表示し、changeイベントが発生したときに、選択したアイコンを.display-icon要素内に表示します。
```html
<input type="text" id="icon-picker" name="picker1" />
<div class="display-icon" style="font-size:64px"></div>
<div class="display-icon" style="font-size:32px"></div>
<div class="display-icon" style="font-size:16px"></div>
```
```javascript
<script type="text/javascript">
  $(() => {
    let $picker = $('#icon-picker').yellowBlobPicker({
      iconsPerPage: 30,
      emptyIcon: false,
    });
    $picker.on('change', e => {
      $('.display-icon').html($.createYellowBlobIcon(e.target.value));
    });
    $('.display-icon').html($.createYellowBlobIcon($picker.val()));
  });
</script>
```

## オプション
アイコンピッカー自体は、[fontIconPicker](https://github.com/fontIconPicker/fontIconPicker)プラグインを使用しています。  
fontIconPickerプラグインのオプションのうち、sourceとiconGenerator以外のオプションをそのまま使用できます。

## クレジット
 - プラグイン内で使用している[emoji](https://github.com/googlefonts/noto-emoji)は、Apache License2.0の下でライセンスされています。
 - プラグイン内で使用している[fontIconPicker](https://github.com/fontIconPicker/fontIconPicker)は、MITの下でライセンスされています。
