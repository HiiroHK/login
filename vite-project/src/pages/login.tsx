export function Login() {
    return (
      <div className="bg-indigo-200 h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-blue-500 lg:min-h-screen lg:flex lg:itens-center p-8 sm:p-12">
            <div className="flex-grow itens-center">
              <h1 className="text-white text-center text-2xl sm:text-5xl mb-2">
                seja bem vindo(a)
              </h1>
              <p className="text-center text-blue-200 sm:text-lg">
                faça seu login
              </p>
            </div>
          </div>
          <div className="lg:min-h-screen lg:flex lg:items-center p-12 lg:p-24 xl:p-48">
            <div className="flex-grow bg-white shadow-xl rounded-md border border-gray-300 p-8">
              <div className="sm:flex sm:items-center">
                <img src="https://www.pellarin.com.br/wp-content/uploads/2022/08/artigoBannerMobile767x716_rejuvenescimento-rosto-descubra-os-melhores-tratamentos.jpg" alt="foto" className="sm=flex-shrink-0 mx-auto sm:mx-0 h-24 rounded-full"></img>
                <div className="sm:ml-4 sm:text-left text-center">
                  <p className="text-xl">Marina Silva</p>
                  <p className="text-sm text-gray-600">Gerente de suporte tecnico</p>
                  <div className="mt-4">
                    <button type="button" className="text-red-500 hover:text-white hover:bg-red-500 border border-red-500 font-semibold rounded-md text-xs px-4 py-1">
                      Não é Marina?
                    </button>
                    <form className="flex w-full mt-8">
                      <input type="passworld" placeholder="Senha" className="flex-1 w-full text-gray-700 bg-gray-200 rounded-md hover:bg-white border-gray-200 focus:bg-white py-2 px-4"></input>
                      <button type="button" className="flex-shrink">
                        Entrar
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  