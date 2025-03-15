let usuarios = [{
    
    nome:"lucas",
    saldo:1000,
    
}]


let produtos = [{
    nome:"pcgamer",
    preco:100,
    estoque:10

}]

function  comprar(nomeuser,nomeproduct,quantidade){
    let usuario = usuarios.find(a => a.nome === nomeuser)
    let produto = produtos.find(u => u.nome === nomeproduct)
    
       if (!usuario || !produto) {
        console.log("Nome de usuário ou produto não encontrado.");
        return; // Interrompe a execução se o usuário ou o produto não existirem
    }

    
    if(produto && produto.estoque > 0 && usuario.saldo >= produto.preco * quantidade){
        
        usuario.saldo -= produto.preco * quantidade
        produto.estoque -= quantidade
        
        console.log("Compra realizada vc comprou :",quantidade,produto.nome)
         
        
    }
    
    else{
        console.log("Saldo insuficiente :")
        
    }
    
    if(usuario.nome != nomeuser || produto.nome != nomeproduct){
        console.log(" nome de usuario ou produto nao encontrado")
        
        
        
    }
    
    
    
    
    
   
    
}

comprar("luucas","pcgamer",10)



console.log(produtos)