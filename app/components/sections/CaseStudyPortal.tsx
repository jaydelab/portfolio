const img00321 = "/visual-ir-assets/00321.webp";

interface CaseStudyPortalProps {
  id?: string;
  className?: string;
}

export default function CaseStudyPortal({ id, className = "" }: CaseStudyPortalProps = {}) {
  return (
    <div id={id} className={`content-stretch flex gap-[24px] items-start justify-center relative shrink-0 ${className}`.trim()} data-name="Image" data-node-id="1:719">
            <div className="h-[477.018px] relative shrink-0 w-[792px]" data-name="003 2 1" data-node-id="1:720">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img00321} />
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start leading-[0] pt-[48px] relative shrink-0 w-[384px]" data-name="Container" data-node-id="1:721">
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Text Container" data-node-id="1:722">
                <div className="figma-font-georgia flex flex-col justify-center not-italic relative shrink-0 text-[#393737] text-[32px] w-full" data-node-id="1:723">
                  <p className="leading-[normal]">Portal Fornecedor</p>
                </div>
                <div className="figma-font-geist flex flex-col font-normal justify-center opacity-60 relative shrink-0 text-[16px] text-black w-full" data-node-id="1:724">
                  <p className="leading-[26px]">Plataforma web onde fornecedores internacionais enviam propostas e acompanham negociações com a WAP. Antes, tudo isso vivia solto no ClickUp. Agora tem autenticação por código, dashboard por status e vencimento, formulário bilíngue em inglês e mandarim cobrindo produto, logística e contato.</p>
                </div>
              </div>
              <div className="figma-font-geist flex flex-col font-normal justify-center opacity-60 relative shrink-0 text-[16px] text-black w-full" data-node-id="1:725">
                <p className="leading-[26px]">O resultado é um portal onde o fornecedor tem autonomia pra enviar, acompanhar e atualizar propostas. A WAP ganhou rastreabilidade de negociações e encurtou mais um caminho na rotina.</p>
              </div>
            </div>
          </div>
  );
}
