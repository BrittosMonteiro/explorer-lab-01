//agrupa os padrões em um array
const matches = "aBC".match(/[A-Z]/g)
//Output: Array [B, C]

//pesquisa se existe ou não o padrão
const index = "aBC".search(/[A-Z]/)
//Output: 1

//subistitui os padrões por novo valor
const next = "aBC".replace(/a/, "A")
//Output: ABC

const mmyy = "00/00".match(/(^0[1-9]|^1[0-2])\d{2}[0-9]/g)
//card number
