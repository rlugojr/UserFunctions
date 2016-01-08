// Displays the normal of a mesh
// usage example : showNormals(mesh, 6);
//
// author : Jahow and Jerome
// tag : debug, demos

function showNormals(mesh, size) {
    var normals = mesh.getVerticesData(BABYLON.VertexBuffer.NormalKind);
    var positions = mesh.getVerticesData(BABYLON.VertexBuffer.PositionKind);

    for (var i = 0; i < normals.length; i += 3) {
        var v1 = BABYLON.Vector3.FromArray(positions, i);
        var v2 = v1.add(BABYLON.Vector3.FromArray(normals, i).scaleInPlace(size));
        BABYLON.Mesh.CreateLines(""+i, [v1, v2], scene);
    }
}
