const imoveis=[]
let opcao=""

do{
    opcao = prompt(
        "bem-vindo ao cadastro de imoveis.\n; Total de imoveis. " + imoveis.length +
        "\n\nEscolha uma opção:\n1.novo imóvel\n2.lista imoveis\n3.sair"
    
    
 )
   
 switch(opcao){
    case "1":
        const imovel={}
        imovel.proprietario = prompt("informe o nome do proprietário do imovel:")
        imovel.quartos = parseFloat(prompt("Quantos quartos possui o imovel?"))
        imovel.banheiros =parseFloat(prompt("quantos banheiros possui o imovel?"))
        imovel.garagem = prompt("o imóvel possui garagem?(sim/não)")
         
          const confirma=confirm(
            "salvar este imóvel?\n"+
            "\nPropriétario:"+imovel.proprietario+
            "\nQuartos:"+imovel.quartos +
            "\nbanheiros:"+imovel.quartos +
            "\nPossui garagem?"+imovel.garagem
          )
        
        if (confirma){
            imoveis.push(imovel)
        }
        
        break
    case "2":
       for(let i= 0 ; i <imoveis.length;i++){
        alert(
            "imovel"+(i+1)+
            "\npropriétario:"+ imoveis[i].proprietario +
            "\NQuartos:"+imoveis[i].quartos+
            "\nBanheiros:"+imoveis[i].banheiros +
            "\nPossui garagem?"+imoveis[i].garagem
        )
       }     
        break
    case "3":
        alert("saindo...")
        break
    default:
        alert("opção inválida!")
        break                   
 }
}while ( opcao !=="3");


