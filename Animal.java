public class Animal {
    private String idAnimal;
    private String nome;
    private String especie;
    private String raca;
    private String sexo;
    private int idade;
    private Condicao_Medica condicao_medica;

    public Animal (String idAnimal, String nome, String especie, String raca, String sexo, int idade, Condicao_Medica condicao_medica){
        this.idAnimal = idAnimal;
        this.nome = nome;
        this.especie = especie;
        this.raca = raca;
        this.sexo = sexo;
        this.idade = idade;
        this.condicao_medica = condicao_medica;
    }
    public String getIdAnimal() { return idAnimal; }

    public void setIdAnimal(String idAnimal) { this.idAnimal = idAnimal; }

    public String getNome() { return nome; }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEspecie() {
        return especie;
    }

    public void setEspecie(String especie) {
        this.especie = especie;
    }

    public String getRaca() {
        return raca;
    }

    public void setRaca(String raca) {
        this.raca = raca;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public Condicao_Medica getCondicao_medica() {
        return condicao_medica;
    }

    public void setCondicao_medica(Condicao_Medica condicao_medica) {
        this.condicao_medica = condicao_medica;
    }
}
