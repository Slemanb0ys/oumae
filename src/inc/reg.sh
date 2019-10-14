<div class="panel panel-default">(.*?)<div id="bottombanner">/s
function sedx($text)
{
    $sed = $text;
    $sed = str_replace('<a href="#" class="list-group-item disabled">', '<a hidden>', $sed);
    $sed = str_replace('<a href=', '<p><a href=', $sed);
    $sed = str_replace('<a href="https://www.animesonglyrics.com">[Back]</a></div>', '', $sed);
    $sed = str_replace('https://www.animesonglyrics.com/', '/get/?n0=', $sed);
    $sed = str_replace('<div id="titlelist" >', '<div hidden>', $sed);
    $sed = str_replace('<i>', '', $sed);
    $sed = str_replace('<br /><span class="fineprint">', '</a><br /><span class="fineprint"><font size=2>', $sed);
    $sed = str_replace('</i>', '</font>', $sed);
    
    return $sed;
}
