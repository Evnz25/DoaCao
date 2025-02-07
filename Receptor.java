public class Receptor extends Pessoa {
    private String idReceptor;

    public Receptor(String idReceptor, String nome, String cpf, String telefone, String email, Endereco endereco, Animal animal){
        this.idReceptor = idReceptor;
        super(nome, cpf, telefone, email, endereco, animal);
    }

    public String getIdReceptor() { return idReceptor; }

    public void setIdReceptor(String idReceptor) { this.idReceptor = idReceptor; }

    public void realizarAdocao(){}
}
