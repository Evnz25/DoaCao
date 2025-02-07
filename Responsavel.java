public class Responsavel extends Pessoa {
    private String idResponsavel;
    private String senha;
    private String cargo;
    private String dataAdmissao;

    public Responsavel(String idResponsavel, String senha, String cargo, String dataAdmissao, String nome, String cpf, String telefone, String email, Endereco endereco, Animal animal){
        this.idResponsavel = idResponsavel;
        this.senha = senha;
        this.cargo = cargo;
        this.dataAdmissao = dataAdmissao;
        super(nome, cpf, telefone, email, endereco, animal);
    }

    public String getIdResponsavel() { return idResponsavel; }

    public void setIdResponsavel(String idResponsavel) { this.idResponsavel = idResponsavel; }

    public String getSenha() { return senha; }

    public void setSenha(String senha) { this.senha = senha; }

    public String getCargo() { return cargo; }

    public void setCargo(String cargo) { this.cargo = cargo; }

    public String getDataAdmissao() { return dataAdmissao; }

    public void setDataAdmissao(String dataAdmissao) { this.dataAdmissao = dataAdmissao; }

    public void realizarDoacao(){
    }
}
